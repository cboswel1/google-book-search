import React from "react";
import { MDBBtn } from "mdbreact";

//add mdb 
const ResultsDisplayed = props => {
  return (
    <span>
      <h3>{props.title}</h3>
      <h4>{props.authors}</h4>
      <a href={props.link}>Link</a>
      <img src={props.image} alt="..." />
      <p>{props.description}</p>
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
    </span>
  );
};

export default ResultsDisplayed;
