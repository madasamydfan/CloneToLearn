import React from "react";
import Login from "./loginBox";
import "./loginBottom.css"
import SignInButton from "./signinbutton";
const LoginBottom = () =>{
    return(
        <>
        <Login></Login>
    <div className='main-login'>
       <SignInButton text={"Get Started"}/>
    </div>
    </>
    )
}
 export default LoginBottom ;