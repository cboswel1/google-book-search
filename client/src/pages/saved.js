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
  }

  //display saved
  displaySaved = () => {
      API.savedBooks()
      .then(res => {
          this.setState({
              books : res.data
          })
      })
      .catch(error => console.log(error));
  }

  


  //map => google books json
  render() {
    return (
      <MDBContainer>
        <JumbotronPage />
        
        
        <SavedCard>
          {this.state.books.map(books => (
            <SavedBooks
              key={books.id}
              title={books.volumeInfo.title}
              authors={books.volumeInfo.authors}
              image={books.volumeInfo.imageLinks.thumbnail}
              description={books.volumeInfo.description}
              link = {books.volumeInfo.infoLink}
            />
          ))}
        </SavedCard>
        
      </MDBContainer>
    );
  }
}

export default Saved;