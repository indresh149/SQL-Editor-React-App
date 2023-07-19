import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/sql-editor");
  };

  return (
    <div className="landing-page">
      <h1>Welcome</h1>
      <p>Discover the power of our SQL editor.</p>
      <button className="cta-button" onClick={handleCTAClick}>
        Go to SQL Editor
      </button>
    </div>
  );
};

export default LandingPage;
