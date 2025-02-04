// import React from "react";

// const SectionOnePage = () => {
//   return (
//     <div>
//       <h1>Section One</h1>
//       <button onClick={() => window.location.href = "/section-two"}>Next</button>
//       <button onClick={() => window.location.href = "/document-check"}>Back</button>
//     </div>
//   );
// };

// export default SectionOnePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SectionOnePage.css"
import sectionOne from "../images/sectionOne.png";


const SectionOnePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    cellPhone: "",
    email: "",
    emailNotice: false,
    primaryLanguage: "",
    needInterpreter: "",
    needSignLanguageInterpreter: "",
    relationshipToStudent: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/SectionTwoPage"); // Navigate to next section
  };

  return (
    <div className="main-div">
        <img 
              src={sectionOne} 
              alt="section one header" 
              className="section-one-header"
              
            />
    <div className="form-container">

      
         
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Address (Street, City, State, ZIP Code):</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Cell Phone:</label>
        <input type="tel" name="cellPhone" value={formData.cellPhone} onChange={handleChange} />

        <label>Email Address:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>
          <input type="checkbox" name="emailNotice" checked={formData.emailNotice} onChange={handleChange} />
          Check here if you want notice of scheduled hearings by email
        </label>

        <label>Primary Language:</label>
        <input type="text" name="primaryLanguage" value={formData.primaryLanguage} onChange={handleChange} required />

        <label>Will you need an interpreter?</label>
        <select name="needInterpreter" value={formData.needInterpreter} onChange={handleChange}>
          <option value="">Select</option>
                    <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Will you need a sign language interpreter?</label>
        <select name="needSignLanguageInterpreter" value={formData.needSignLanguageInterpreter} onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Relationship to Student:</label>
        <input type="text" name="relationshipToStudent" value={formData.relationshipToStudent} onChange={handleChange} required />

       
      </form>
      
    </div>
    <div className="button-group">
          
          <button onClick={() => window.location.href = "/section-two"}>Next</button>
           <button onClick={() => window.location.href = "/document-check"}>Back</button>
     
             </div>
    </div>
  );
};

export default SectionOnePage;



