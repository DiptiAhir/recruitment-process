import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";
import axios from "axios";

const skillsList = [
  "JavaScript", "React", "Node.js", "Python", "Java",
  "HTML/CSS", "SQL", "TypeScript", "Docker", "AWS", "Ruby"
];

const JobRequisitionPage = () => {
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const navigate = useNavigate();

  const handleSkillChange = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !experience || !companyLocation || !employmentType || !contactEmail || skills.length === 0) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/v1/createJobRequisition", {
        title,
        skills,
        experience,
        companyLocation,
        employmentType,
        contactEmail,
      });

      console.log("Job created successfully:", response.data);
      toast.success("Job requisition created successfully!");

      // Redirect to JobApplication page after successful submission
      navigate("/jobs");

    } catch (error) {
      console.error("Error creating job requisition", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "There was an error creating the job requisition.");
    }
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Job Requisition</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div>
          <label className="block text-gray-600 font-medium mb-2">Job Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the job title"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2">Required Skills</label>
          <div className="grid grid-cols-2 gap-4">
            {skillsList.map((skill, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`skill-${index}`}
                  checked={skills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                  className="mr-2"
                />
                <label htmlFor={`skill-${index}`} className="text-gray-600">{skill}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2">Experience Level</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Experience Level</option>
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2">Employment Type</label>
          <select
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Employment Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2">Company Location</label>
          <input
            type="text"
            value={companyLocation}
            onChange={(e) => setCompanyLocation(e.target.value)}
            placeholder="E.g., New York, Remote"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2">Contact Email</label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            placeholder="Enter the contact email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default JobRequisitionPage;
