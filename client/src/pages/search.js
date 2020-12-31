import React from "react";
import Search from "../components/SearchResults/searchResults";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";

const SearchDisplay = () => {
  return (
    <React.Fragment>
      <JumbotronPage />
      <Search />
    </React.Fragment>
  );
};

export default SearchDisplay;
