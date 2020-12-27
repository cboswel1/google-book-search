import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';

const SavedCard = props => {
  return (
    <MDBRow>
      <MDBCol style={{ maxWidth: "40rem" }}>
        <MDBCard reverse>
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Results</MDBCardTitle>
            <div>{props.title}</div>
            <div>{props.authors}</div>
            <div>{props.link}</div>
            <div>{props.image}</div>
            <div>{props.description}</div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default SavedCard;
