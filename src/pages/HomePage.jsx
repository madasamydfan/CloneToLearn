import React from "react";

import "./HomePage.css"; // Link the CSS file

const HomePage = () => {
    // const style={
    //     background-Image:
    // }
  return (
    <div className="hero-container">
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
