import React from "react";
import "./signinbutton.css" ;
import Login from "./loginBox";
 const SignInButton = ({text}) =>
    {
    return(
        <>
        <button type="submit"className="get-started-btn">{text}</button>
        </>
    )
 }
 export default SignInButton ;