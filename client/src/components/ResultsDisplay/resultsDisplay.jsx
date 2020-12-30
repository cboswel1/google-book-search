import React from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";

//add mdb
function ResultsDisplayed(props) {
  function handleSave(e) {
    e.preventDefault();

    fetch("/api/book", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        title: props.volumeInfo.title,
        authors: props.volumeInfo.authors,
        image: props.volumeInfo.imageLinks.thumbnail,
        description: props.volumeInfo.description,
        link: props.volumeInfo.infoLink,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <span>
      <MDBRow className="pb-3">
        <MDBCol size="8">
          <h3>{props.volumeInfo.title}</h3>
        </MDBCol>
        <MDBCol size="4">
          <h4>{props.volumeInfo.authors}</h4>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="2">
          <h3>
            <img
              src={props.volumeInfo.imageLinks.thumbnail}
              className="img-fluid"
              alt="..."
            />
          </h3>
        </MDBCol>
        <MDBCol size="10">
          <p className="text-justify">{props.volumeInfo.description}</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="pt-3">
        <MDBCol size="8"></MDBCol>
        <MDBCol size="4">
          <MDBBtn
            onClick={handleSave}
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
            className="mr-auto"
          >
            <a href={props.volumeInfo.infoLink}>More</a>
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      <hr></hr>
    </span>
  );
}

function ResultsInfo(props) {
  return (
    <ul>
      {props.results.map(result => (
        <ResultsDisplayed key={result.id} {...result} />
      ))}
    </ul>
  )
}

export default ResultsInfo;
