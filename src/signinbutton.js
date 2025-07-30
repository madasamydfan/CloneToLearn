import React from "react";
import "./signinbutton.css";
import { useNavigate } from "react-router-dom";

const SignInButton = ({ text }) => {
  const navigate = useNavigate(); 

  const handleSignIn = () => {
    navigate("/signin"); 
  };

  return (
    <button className="get-started-btn" onClick={handleSignIn}>
      {text}
    </button>
  );
};

export default SignInButton;
