import React, { useState, useEffect } from "react";
import "./style.css";

const Social = () => {
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
    <div className="social-container">
      <h3 className="social-text">You can find me on</h3>
      <div className="socials">
        <a href="https://twitter.com/ZenDevv" target="_blank">
          {imageIcon.twitter && <img src={imageIcon.twitter}/>}
        </a>
        <a href="https://github.com/Vitor-Zen" target="_blank">
          {imageIcon.github && <img src={imageIcon.github}/>}
        </a>
        <a href="https://www.linkedin.com/in/vitor-zen/" target="_blank">
          {imageIcon.linkedin && <img src={imageIcon.linkedin} />}
        </a>
      </div>
    </div>
  );
};

export default Social;
