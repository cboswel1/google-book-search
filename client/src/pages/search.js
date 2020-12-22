import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";
import SearchPage from "../components/Search/search";
import ResultsCard from "../components/SearchResults/searchResults";
import ResultsDisplayed from "../components/ResultsDisplay/resultsDisplay";
import API from "../utils/API";

class Search extends Component {
    //books title
  state = {
    books: [],
    title: "",
  };

  //input
  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  //form
  handleFormSubmit = e => {
    e.preventDefault();
    API.searchBooks(this.state.title)
      .then(res => {
        this.setState({
          books: res.data.items,
          title: "",
        });
        console.log(this.state.books);
      })
      .catch(error => console.log(error));
  };

  //handle save
  handleSave = bookData => {
      API.saveBook(bookData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
  }

  //map => google books json
  render() {
    return (
      <MDBContainer>
        <JumbotronPage />
        <SearchPage
          value={this.state.title}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        
        <ResultsCard>
          {this.state.books.map(books => (
            <ResultsDisplayed
              key={books.id}
              title={books.volumeInfo.title}
              authors={books.volumeInfo.authors}
              image={books.volumeInfo.imageLinks.thumbnail}
              description={books.volumeInfo.description}
              link = {books.volumeInfo.infoLink}
            />
          ))}
        </ResultsCard>
        
      </MDBContainer>
    );
  }
}

export default Search;
