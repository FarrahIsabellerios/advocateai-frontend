import React from "react";

const DocumentCheckPage = () => {
  return (
    <div>
      <h1>Do You Have the Required Documents?</h1>
      <button onClick={() => window.location.href = "/section-one"}>Next</button>
      <button onClick={() => window.location.href = "/"}>Back</button>
    </div>
  );
};

export default DocumentCheckPage;
