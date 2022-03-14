import React from "react";
import ButtonSegment from "./ButtonSegment";
import mail from "../icons/mail.png";
import linkedIn from "../icons/in.png";

function InfoSegment(props) {
  return (
    <div className="info">
      <h1>{props.name}</h1>
      <h2>{props.possition}</h2>
      <a className="website" href={props.website}>
        {props.website}
      </a>
      <ButtonSegment
        icon={mail}
        name="Email"
        color="#FFFFFF"
        address="nedyalko.velkov@gmail.com"
      />
      <ButtonSegment
        icon={linkedIn}
        name="LinkedIn"
        color="#297FE5"
        address="https://bg.linkedin.com/in/nedyalko-velkov-b26004151"
      />
    </div>
  );
}

export default InfoSegment;
