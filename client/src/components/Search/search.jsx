import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const SearchPage = props => {
  return (
    <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <MDBFormInline>
          <input
            className="form-control mr-sm-2"
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            placeholder="Search"
            aria-label="Search"
            id="search"
          />
          <MDBBtn
            onClick={props.handleFormSubmit}
            gradient="aqua"
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
  );
};

export default SearchPage;
