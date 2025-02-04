import React from "react";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to AdvocateAI</h1>
      <button onClick={() => window.location.href = "/document-check"}>Get Started</button>
    </div>
  );
};

export default LandingPage;

