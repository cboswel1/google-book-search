import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';

const SavedCard = props => {
  return (
    <MDBRow>
      <MDBCol style={{ maxWidth: "100rem" }}>
        <MDBCard reverse>
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Saved Books</MDBCardTitle>
            <div>{props.children}</div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default SavedCard;
