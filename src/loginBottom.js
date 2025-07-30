import React from "react";
import Login from "./loginBox";
import "./loginBottom.css"
import { useState } from "react";
import SignInButton from "./signinbutton";
const LoginBottom = () =>{
    const [email, setEmail] = useState("");
      const [error, setError] = useState("");
    
      const validateEmail = (email) => {
       
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
      const handleSubmit=(e)=>{
       e.preventDefault(); 
        console.log(email)
      }
      
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
    return(
        <>
        
    <div className='main-login'>
        <form onSubmit={handleSubmit}>
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
       <SignInButton text={"Get Started"}/>
       </form>
    </div>
    </>
    )
}
 export default LoginBottom ;