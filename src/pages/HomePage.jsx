import React from "react";
import SignInButton from "../signinbutton";
import "./HomePage.css"; // Link the CSS file
import backgroundImage from "../assets/img/backgrn.jpg"; // adjust path accordingly
import Login from "../loginBox";
const HomePage = () => {
  const style = {
    backgroundImage: ` radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%",
    color: "#fff",
  };
  return (
    <div className="hero-container" style={style}>
      {/* Navbar */}
      <div className="navbar">
        <img
          src={require("../assets/img/Netflixlogo.png")}
          alt="Netflix Logo"
          className="logo"
        />
        <SignInButton text={"Sign in"} />
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <p className="hero-title">
          Unlimited movies, TV <br className="hide-on-mobile" />
          shows and more
        </p>
        <p className="hero-subtitle">Starts at ₹149. Cancel at any time.</p>
        <p className="hero-description">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="hero-input-group">
          <div className="for-column">
            <Login />
            <SignInButton text={"Get Started"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
