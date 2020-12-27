import React from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";

//add mdb
const ResultsDisplayed = props => {
  return (
    <span>
      <MDBRow className="pb-3">
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
        <MDBCol size="4">
      <MDBBtn
        onClick={props.handleSave}
        gradient="aqua"
        rounded
        size="sm"
        type="submit"
        className="mr-auto"
      >
        Save
      </MDBBtn>
        <MDBBtn
        gradient="aqua"
        rounded
        size="sm"
        type="submit"
        className="mr-auto">
          <a href={props.link}>More</a>
        </MDBBtn>
        </MDBCol>
      </MDBRow>

      
      
      <hr></hr>
    </span>
    
  );
};

export default ResultsDisplayed;
