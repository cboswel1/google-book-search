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
          books: res.data
        });
      })
      .catch(error => console.log(error));
  }

  //map => google books json
  render() {
    return (
      <MDBContainer>
        <JumbotronPage />
        
        <SavedCard>
          {this.state.books.map(book => (
            <SavedBooks
              key={book._id}
              title={book.title}
              authors={book.authors}
              image={book.image}
              description={book.description}
              link={book.link}
            />
          ))}
        </SavedCard>
      </MDBContainer>
    );
  }
}

export default Saved;
