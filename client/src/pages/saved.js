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

  handleDelete = id => {
    API.deleteBook(id)
      .then(res => this.displaySaved())
      .catch(error => console.log(error));
  };

  //display saved
  displaySaved = () => {
    console.log("save hit");
    API.findBooks()
      .then(res => {
        this.setState({
          books: res.data,
        });
        console.log(res.data);
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
          </ResultsCard>
        ) : (
          <ResultsCard heading="Saved Books"></ResultsCard>
        )}
      </MDBContainer>
    );
  }
}

export default Saved;
