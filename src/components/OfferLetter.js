import React, { useState } from "react";

const OfferLetter = () => {
  const [offerType, setOfferType] = useState("");

  const handleSelection = (e) => {
    setOfferType(e.target.value);
  };

  const handleSubmit = () => {
    // Send the offer letter choice to Slack or another service
    console.log("Selected Offer Type:", offerType);
  };

  return (
    <div>
      <h2>Select Offer Type</h2>
      <select value={offerType} onChange={handleSelection}>
        <option value="">--Select--</option>
        <option value="Intern">Intern</option>
        <option value="Full-time">Full-time</option>
      </select>
      <button onClick={handleSubmit}>Submit Offer</button>
    </div>
  );
};

export default OfferLetter;
