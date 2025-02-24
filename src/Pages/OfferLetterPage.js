import React, { useState } from 'react';

const OfferLetterGenerator = () => {
  const [templateType, setTemplateType] = useState('Intern');
  const [candidateName, setCandidateName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [salary, setSalary] = useState('');
  const [benefits, setBenefits] = useState({
    healthInsurance: false,
    paidTimeOff: false,
    retirementPlan: false,
  });
  const [offerLetterPreview, setOfferLetterPreview] = useState('');
  // Handle template type change (Intern/Full-Time)
  const handleTemplateChange = (e) => {
    setTemplateType(e.target.value);
  };

  // Handle candidate benefits change
  const handleBenefitsChange = (e) => {
    const { name, checked } = e.target;
    setBenefits((prevBenefits) => ({
      ...prevBenefits,
      [name]: checked,
    }));
  };

  // Generate the offer letter preview
  const generatePreview = () => {
    const benefitsList = Object.keys(benefits)
      .filter((benefit) => benefits[benefit])
      .map((benefit) => benefit.replace(/([A-Z])/g, ' $1').toLowerCase())
      .join(', ');

      const letter = `
      Dear ${candidateName},
  
      We are pleased to formally offer you the position of ${jobTitle} at Techlusion. We are excited about the opportunity to have you join our team and contribute to the continued success of our organization.
  
      Please find below the details of your offer:
  
      Position: ${jobTitle} as ${templateType} 
      Start Date: ${startDate}
      Salary/Stipend: ₹${salary} per month
  
      Benefits Included:
      ${benefitsList ? benefitsList : 'None'}
  
      We are confident that your exceptional skills, experience, and professional background will significantly enhance our team. We believe that you will thrive in our collaborative work environment and make valuable contributions to the company’s growth and success.
  
      Should you have any questions or require further clarification regarding the terms of this offer, please do not hesitate to reach out to us.
  
      We eagerly look forward to the possibility of working with you and welcoming you aboard.
  
      Sincerely,
      Dipti Barariya
      Techlusion
      `;
  
    setOfferLetterPreview(letter);
  };
  // Send the offer letter (Mocked function)
  const sendOfferLetter = () => {
    alert('Offer letter sent via email!');
    // Actual email sending logic should be here, integrated with backend
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Offer Letter Generator</h1>

      {/* Candidate Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Candidate Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Candidate Name</label>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Enter candidate name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Enter job title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Salary/Stipend</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Enter salary"
            />
          </div>
        </div>
      </div>

       {/* Template Type Selection */}
       <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Template Type</h2>
        <div className="flex ">
          <label className="mr-4">
            <input
              type="radio"
              value="Intern"
              checked={templateType === 'Intern'}
              onChange={handleTemplateChange}
              className="mr-2"
            />
            Intern
          </label>
          <label>
            <input
              type="radio"
              value="Full-Time"
              checked={templateType === 'Full-Time'}
              onChange={handleTemplateChange}
              className="mr-2"
            />
            Full-Time Employee
          </label>
        </div>
      </div>


      {/* Benefits */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Benefits</h2>
        <div className="flex flex-wrap gap-4">
          {['healthInsurance', 'paidTimeOff', 'retirementPlan'].map((benefit) => (
            <div key={benefit} className="flex items-center">
              <input
                type="checkbox"
                name={benefit}
                checked={benefits[benefit]}
                onChange={handleBenefitsChange}
                className="mr-2"
              />
              <label>{benefit.replace(/([A-Z])/g, ' $1').toLowerCase()}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Button */}
      <div className="mb-6 text-center">
        <button
          onClick={generatePreview}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
        >
          Generate Preview
        </button>
      </div>

      {/* Offer Letter Preview */}
      {offerLetterPreview && (
        <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50 shadow-lg max-w-6xl ">
          <h3 className="text-xl font-semibold mb-4">Offer Letter Preview</h3>
          <pre className="whitespace-pre-line text-gray-800 font-mono text-sm px-4">{offerLetterPreview}</pre>
        </div>
      )}

      {/* Send Button */}
      <div className="text-center">
        <button
          onClick={sendOfferLetter}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Send Offer Letter
        </button>
      </div>
    </div>
  );
};

export default OfferLetterGenerator;
