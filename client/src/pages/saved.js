import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";
import SavedCard from "../components/SavedDisplay/savedDisplay";
import SavedBooks from "../components/SavedResultsJumbo/savedResults";

import API from "../utils/API";

class Saved extends Component {
  //books
  state = {
    books : [],
  };

  componentDidMount = () => {
    this.displaySaved();
  };

  handleDelete = id => {
    API.deleteBook(id)
      .then(res => this.displaySaved())
      .catch(error => console.log(error));
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

  //map => google books json
  render() {
    return (
      <MDBContainer>
        <JumbotronPage />
      {this.state.books.length ? (
        <SavedCard>
          {this.state.books.map(books => (
            <SavedBooks
              key={books._id}
              title={books.title}
              authors={books.authors}
              image={books.image}
              description={books.description}
              link={books.link}
              handleDelete={() => this.handleDelete(books._id)}
            />
          ))}
        </SavedCard>
      ) : (
        <SavedCard></SavedCard>
      )}
      </MDBContainer>
    );
  }
}

export default Saved;
