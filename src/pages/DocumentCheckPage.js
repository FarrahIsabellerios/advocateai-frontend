import React from "react";
import "../styles/DocumentCheckPage.css"

const DocumentCheckPage = () => {
  return (
    <div className="doc-main">
      {/* <h1>Do You Have the Required Documents?</h1> */}
      <div className="button-group-dcp">
          
      <button onClick={() => window.location.href = "/section-one"}>Next</button>
      <button onClick={() => window.location.href = "/"}>Back</button>
     
             </div>

     
    </div>
  );
};

export default DocumentCheckPage;
