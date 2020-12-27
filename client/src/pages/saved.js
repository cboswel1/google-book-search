import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";
import SavedBooks from "../components/SavedResultsJumbo/savedResults";
import ResultsCard from "../components/SearchResults/searchResults";

import API from "../utils/API";

class Saved extends Component {
  //books
  state = {
    books: [],
  };

  componentDidMount = () => {
    this.displaySaved();
  };

  //delete
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
          <ResultsCard heading="Saved Books">
            {this.state.books.map(book => (
              <SavedBooks 
                key={book._id}
                title={book.title}
                authors={book.authors}
                image={book.image}
                description={book.description}
                link={book.link}
                handleDelete={() => this.handleDelete(book._id)}
              />
            ))}
          </ResultsCard>
        ) : (
          <ResultsCard heading="Saved Books"></ResultsCard>
        )}
      </MDBContainer>
    );
  }
}

export default Saved;
