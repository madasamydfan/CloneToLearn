import React, { useState } from "react";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
   
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(""); 
    console.log(email)
  };

  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <div className="login-container">
      <input
        placeholder="Email Address"
        type="email"
        className="Login-input"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
