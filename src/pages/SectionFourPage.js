import React from "react";

const SectionFourPage = () => {
  return (
    <div>
      <h1>Section Four</h1>
      <button onClick={() => window.location.href = "/document-check"}>Submit</button>
      <button onClick={() => window.location.href = "/section-three"}>Back</button>
    </div>
  );
};

export default SectionFourPage;
