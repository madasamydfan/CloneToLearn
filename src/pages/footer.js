import React from "react";
import "./footer.css"
const Footer = () => {
    return (
        <div className="outer-box">
            <div className="inner-box">
                <h4 className="text">Questions? Call</h4>
                <a href="" className="angertag1"> 000-800-919-1743</a>
            </div>
            <div className="inner-box-in">
                <div className="inner-box1">
                    <a href="" className="angertag"> FAQ</a>
                    <a href="" className="angertag"> Account</a>
                    <a href="" className="angertag"> Investor Relations</a>
                    <a href="" className="angertag"> Ways to Watch</a>

                </div>
                <div className="inner-box1">
                    <a href="" className="angertag"> Privacy</a>
                    <a href="" className="angertag"> Corporate Information</a>
                    <a href="" className="angertag"> Speed Test</a>
                    <a href="" className="angertag"> Only on Netflix</a>

                </div>
                <div className="inner-box1">
                    <a href="" className="angertag"> Ways to Watch</a>
                    <a href="" className="angertag"> Help Centre</a>
                    <a href="" className="angertag"> Contact Us</a>
                    <a href="" className="angertag">Terms of Use</a>
                </div>
                <div className="inner-box1">
                    <a href="" className="angertag"> Jobs</a>
                    <a href="" className="angertag">Cookie Preferences</a>
                    <a href="" className="angertag"> Legal Notices</a>

                </div>

            </div>
            <div className="inner-box">
                <select className="language-box">
                    <option className="lang-option">English</option>
                    <option>हिन्दी</option>
                </select>

            </div>
            <div className="inner-box">
                <div className="text">
                    <h4>Netflix India</h4>
                </div>
            </div>
            <div className="inner-box">
                <h4 className="text">This page is protected by Google reCAPTCHA to ensure you're not a bot? Call</h4>
                <a href="" className="angertagblue"> Learn more.</a>
            </div>

        </div>
    )
}
export default Footer;