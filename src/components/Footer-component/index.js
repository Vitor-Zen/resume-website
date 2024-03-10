import React, { useState, useEffect } from "react";
import "./style.css";

const Footer = () => {
  const [imageIcon, setImageIcon] = useState({
    twitter: null,
    github: null,
    linkedin: null
  });

  useEffect(() => {
    const importImages = async () => {
      const twitterImage = await import("../../assets/twitter-icon.png");
      const githubImage = await import("../../assets/github-icon.png");
      const linkedInImage = await import("../../assets/linkedin-icon.png");
      setImageIcon({
        twitter: twitterImage.default,
        github: githubImage.default,
        linkedin: linkedInImage.default
      });
    };

    importImages();
  }, []);

  return (
    <div className="footer-container">
      <h3 className="footer-text">You can find me on</h3>
      <div className="socials">
        <a href="https://twitter.com/ZenDevv" target="_blank">
          {imageIcon.twitter && <img src={imageIcon.twitter}  className="footer-img" alt="Twitter Icon" />}
        </a>
        <a href="https://github.com/Vitor-Zen" target="_blank">
          {imageIcon.github && <img src={imageIcon.github} className="footer-img" alt="GitHub Icon" />}
        </a>
        <a href="https://www.linkedin.com/in/vitor-zen/" target="_blank">
          {imageIcon.linkedin && <img src={imageIcon.linkedin} className="footer-img" alt="LinkedIn Icon" />}
        </a>
      </div>
    </div>
  );
};

export default Footer;
