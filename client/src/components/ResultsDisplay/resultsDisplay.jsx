import React from "react";

const ResultsDisplayed = props => {
  return (
    <span>
      <h3>{props.title}</h3>
      <h4>{props.authors}</h4>
      <a href={props.link}>Link</a>
      <img src={props.image} alt="..." />
      <p>{props.description}</p>
    </span>
  );
};

export default ResultsDisplayed;
