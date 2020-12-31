import React from "react";
import { MDBCol, MDBFormInline, MDBBtn, MDBRow } from "mdbreact";

const SearchPage = props => {
  return (
    <MDBRow>
      <MDBCol md="4"></MDBCol>
      <MDBCol md="4">
        <div className="input-group md-form form-sm form-1 pl-0 p-2">
          <MDBFormInline>
            <input
              className="form-control mr-sm-2"
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="text"
              placeholder="Find A Book!"
              aria-label="Search"
              id="search"
            />
            <MDBBtn
              onClick={props.handleFormSubmit}
              outline
              color="elegant-color"
              rounded
              size="sm"
              type="submit"
              className="mr-auto"
            >
              Search
            </MDBBtn>
          </MDBFormInline>
        </div>
      </MDBCol>
      <MDBCol md="4"></MDBCol>
    </MDBRow>
  );
};

export default SearchPage;
