import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";

const ApplicationForm = ({ selectedJob, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [skills, setSkills] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [loading, setLoading] = useState(false); // To handle loading state

  const { title, companyLocation, experience, skills: availableSkills = [] } = selectedJob || {};

  const handleSkillChange = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed!");
        setResume(null);
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !resume || !experience || skills.length === 0) {
      toast.error("All fields are required!");
      return;
    }

    if (appliedJobs.has(title)) {
      toast.warning("You have already applied for this job.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    formData.append("experience", experience);
    formData.append("skills", JSON.stringify(skills));
    formData.append("jobTitle", title);

    try {
      setLoading(true); // Disable button while submitting
      const response = await fetch("http://localhost:4000/api/v1/submitApplication", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Response from server:", result);

      if (!response.ok) {
        throw new Error("Failed to submit application.");
      }

      toast.success("Application submitted successfully!");
      setAppliedJobs((prev) => new Set(prev).add(title));
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Error submitting application. Please try again later.");
    } finally {
      setLoading(false); // Re-enable button after request
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border">
      <button onClick={onClose} className="text-white font-bold mb-4">
        ← Back to Job Listings
      </button>
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">
        Applying for {title} - {companyLocation}
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Upload Resume (PDF Only)</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border rounded-lg px-4 py-2 shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Experience Level</label>
          <input
            type="text"
            value={experience}
            readOnly
            className="w-full border rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Select Skills</label>
          <div className="flex flex-wrap gap-2">
            {availableSkills.length > 0 ? (
              availableSkills.map((skill) => (
                <button
                  type="button"
                  key={skill}
                  onClick={() => handleSkillChange(skill)}
                  className={`px-3 py-1 rounded-lg border ${skills.includes(skill) ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  {skill}
                </button>
              ))
            ) : (
              <p className="text-gray-500">No skills specified for this job.</p>
            )}
          </div>
        </div>

        <Button text="Submit Application" onClick={handleSubmit} disabled={loading} />
      </div>
    </div>
  );
};

export default ApplicationForm;
