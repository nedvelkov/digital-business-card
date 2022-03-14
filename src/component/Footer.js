import React from "react";
import facebookIcon from "../icons/facebook.png";
import githubIcon from "../icons/github.png";
import instagramIcon from "../icons/instagram.png";
import twitterIcon from "../icons/twitter.png";

function Footer() {
  return (
    <footer>
      <img src={twitterIcon} alt="Twitter" />
      <img src={facebookIcon} alt="Twitter" />
      <img src={instagramIcon} alt="Twitter" />
      <img src={githubIcon} alt="Twitter" />
    </footer>
  );
}

export default Footer;
