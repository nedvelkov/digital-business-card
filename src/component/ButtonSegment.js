import React from "react";

function ButtonSegment(props) {
  return (
    <button style={{ backgroundColor: props.color }}>
      <img src={props.icon} alt={props.name} />
      <a href={props.address} className="buttonName">
        {props.name}
      </a>
    </button>
  );
}

export default ButtonSegment;
