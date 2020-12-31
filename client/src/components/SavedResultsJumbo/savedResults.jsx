import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

//add mdb
const SavedBooks = props => {
  return (
    <span>
      <MDBRow className="pb-3 pt-3">
        <MDBCol size="8">
          <h3>{props.title}</h3>
        </MDBCol>
        <MDBCol size="4">
          <h4>{props.authors}</h4>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="2">
          <h3>
            <img src={props.image} className="img-fluid" alt="..." />
          </h3>
        </MDBCol>
        <MDBCol size="10">
          <p className="text-justify">{props.description}</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="pt-3">
        <MDBCol size="8"></MDBCol>
        <MDBCol size="4"></MDBCol>
      </MDBRow>

      <hr></hr>
    </span>
  );
};

export default SavedBooks;
