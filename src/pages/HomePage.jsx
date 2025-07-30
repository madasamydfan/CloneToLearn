import React from "react";

import "./HomePage.css"; // Link the CSS file
import backgroundImage from "../assets/img/backgrn.jpg"; // adjust path accordingly
const HomePage = () => {
    const style={
       backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%"
    };
  return (
    <div className="hero-container" style={style}>
      {/* Navbar */}
      <div className="navbar">
        <h1 className="logo">NETFLIX</h1>
        {/* <SignInButton /> */}
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Unlimited movies, TV <br className="hide-on-mobile" />
          shows and more
        </h1>
        <p className="hero-subtitle">Starts at ₹149. Cancel at any time.</p>
        <p className="hero-description">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="hero-input-group">
          {/* <EmailInput />
          <GetStartedButton /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
