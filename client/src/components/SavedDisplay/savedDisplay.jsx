import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from "mdbreact";

const SavedCard = props => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard reverse>
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Books!</MDBCardTitle>
            <div>{props.children}</div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default SavedCard;
