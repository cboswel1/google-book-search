

import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import "./style.css"

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5 text-center pt-5">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3 header-text">Google Books</h2>
            <p className="lead header-text">
              A search and save directory of all your favorite books. 
            </p>
            
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      );
    };

export default JumbotronPage;