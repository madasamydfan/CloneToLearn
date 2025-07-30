import React from "react";
import "./MoviePopupCard.css";
import SignInButton from "../signinbutton"; // your button component

const MoviePopupCard = ({ 
  posterImage, 
  titleImage, 
  tags = [], 
  description 
}) => {
  return (
    <div className="popup-card">
      <div className="popup-header">
        <img src={posterImage} alt="Poster" className="poster" />
        <img src={titleImage} alt="Title" className="title-logo" />
      </div>

      <div className="popup-tags">
        {tags.map((tag, index) => (
          <span className="popup-tag" key={index}>{tag}</span>
        ))}
      </div>

      <p className="popup-description">{description}</p>

      <SignInButton text="Get Started" />
    </div>
  );
};

export default MoviePopupCard;
