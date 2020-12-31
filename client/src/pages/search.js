import React from "react";
import Search from "../components/SearchResults/searchResults";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";
import SavedCard from "../components/SavedDisplay/savedDisplay";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const SearchDisplay = () => {
  return (
    <React.Fragment>
      <MDBContainer>
      <MDBRow>
        <MDBCol size="12">
          <JumbotronPage />
      <SavedCard>
        <Search />
      </SavedCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
};

export default SearchDisplay;
