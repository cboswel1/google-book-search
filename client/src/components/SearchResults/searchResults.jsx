import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';

const ResultsCard = props => {
  return (
    <MDBRow>
      <MDBCol size = "12">
        <MDBCard reverse>
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Results</MDBCardTitle>
            <div>{props.children}</div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default ResultsCard;