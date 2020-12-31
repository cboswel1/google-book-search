import { MDBContainer } from "mdbreact";
import React, { useState } from "react";
import SearchPage from "../Search/search";
import ResultsInfo from "../ResultsDisplay/resultsDisplay";
import API from "../../utils/API";

function Search() {
  //books title
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  async function findBooks(book) {
    //input
    await API.searchBooks(book)

      .then(res => setResult(res.data.items))
      .catch(error => console.log(error));
  }

  console.log(result);

  function handleInputChange(event) {
    event.preventDefault();
    const value = event.target.value;
    setSearch(value);
    // console.log(value)
  }

  //form
  function handleFormSubmit(event) {
    event.preventDefault();
    findBooks(search);
    // console.log(search)
  }

  //map => google books json

  return (
    <MDBContainer>
      <SearchPage
        value={search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      <ResultsInfo results={result} />
    </MDBContainer>
  );
}

export default Search;
