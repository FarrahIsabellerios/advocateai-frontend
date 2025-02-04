import React from "react";
import { useNavigate } from "react-router-dom"; // Ensure this is included
import "../styles/LandingPage.css"
import buttonImage from "../images/landingGetStartedButton.png";

const LandingPage = () => {
    const navigate = useNavigate(); // Make sure this is inside the component
  return (
    <div>
      <h1>Welcome to AdvocateAI</h1>
      {/* <button onClick={() => window.location.href = "/document-check"}>Get Started</button> */}
      <div className="landing-page-button">   
         <img 
        src={buttonImage} 
        alt="Get Started" 
        className="custom-button"
        onClick={() => navigate("/document-check")} 
      />
        </div>
    </div>
  );
};

export default LandingPage;

