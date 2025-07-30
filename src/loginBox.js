import React from "react";
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">
        <input placeholder="Email Address" className="Login-input"></input>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default Login;
