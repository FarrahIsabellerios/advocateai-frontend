import React from "react";

const SectionTwoPage = () => {
  return (
    <div>
      <h1>Section Two</h1>
      <button onClick={() => window.location.href = "/section-three"}>Next</button>
      <button onClick={() => window.location.href = "/section-one"}>Back</button>
    </div>
  );
};

export default SectionTwoPage;
