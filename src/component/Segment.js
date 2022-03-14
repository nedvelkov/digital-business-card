import React from "react";

function Segment(props) {
  return (
    <div className="segment">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Segment;
