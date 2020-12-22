import React from "react";
import { MDBBtn } from "mdbreact";

//add mdb 
const SavedBooks= props => {
  return (
    <span>
      <h3>{props.title}</h3>
      <h4>{props.authors}</h4>
      <a href={props.link}>Link</a>
      <img src={props.image} alt="..." />
      <p>{props.description}</p>
      
      <MDBBtn
            
            gradient="aqua"
            rounded
            size="sm"
            type="submit"
            className="mr-auto"
          >
            Delete
          </MDBBtn>
    </span>
  );
};

export default SavedBooks;