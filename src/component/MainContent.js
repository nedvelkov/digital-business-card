import React from "react";
import Segment from "./Segment";
import InfoSegment from "./InfoSegment";
import Avatar from "./Avatar"

function MainContent() {
  return (
    <div className="mainStyle">
      <Avatar/>
      <InfoSegment
        name="Nedyalko Velkov"
        possition="Fullstack developer"
        website="nedVelkov.io"
      />
      <Segment title="About" content="I am junior fullstack developer." />
      <Segment
        title="Interests"
        content="Reading good books, cooking, fantasy tv-shows and movies, Marvel."
      />
    </div>
  );
}

export default MainContent;
