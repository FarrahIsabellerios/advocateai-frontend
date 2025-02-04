import React from "react";

const SectionThreePage = () => {
  return (
    <div>
      <h1>Section Three</h1>
      <button onClick={() => window.location.href = "/section-four"}>Next</button>
      <button onClick={() => window.location.href = "/section-two"}>Back</button>
    </div>
  );
};

export default SectionThreePage;
