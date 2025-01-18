import React, { useState } from "react";

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (resume) {
      // Send the file to OneDrive via API (documentService.js)
      console.log("Uploading resume:", resume);
    } else {
      console.log("No resume uploaded");
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ResumeUpload;
