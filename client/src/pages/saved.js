import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";
import SavedCard from "../components/SavedDisplay/savedDisplay";
import SavedBooks from "../components/SavedResultsJumbo/savedResults";

import API from "../utils/API";

class Saved extends Component {
  //books
  state = {
    books: [],
  };

  componentDidMount = () => {
    this.displaySaved();
  };

  //display saved
  displaySaved = () => {
    console.log("save hit");
    API.savedBooks()
      .then(res => {
        this.setState({
          books: res.data,
        });
      })
      .catch(error => console.log(error));
  };

  handleSavedBook = bookData => {
    API.savedBooks(bookData)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  //map => google books json
  render() {
    return (
      <MDBContainer>
        <JumbotronPage />

        <SavedCard>
          {this.state.books.map(book => (
            <SavedBooks
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              image={book.volumeInfo.imageLinks.thumbnail}
              description={book.volumeInfo.description}
              link={book.volumeInfo.infoLink}
            />
          ))}
        </SavedCard>
      </MDBContainer>
    );
  }
}

export default Saved;
