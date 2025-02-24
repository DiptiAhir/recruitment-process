import React, { useState, useEffect } from "react";
import ApplicationForm from "./ApplicationForm";

const JobApplication = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/getAllJobRequisitions");
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setJobs(data);
        } else {
          setJobs([]);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main className="container mx-auto py-10 px-6 max-w-5xl">
      {!selectedJob ? (
        <>
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
            Explore Exciting Job Opportunities
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
                <p className="text-gray-600 font-medium mt-1">
                  📍 {job.companyLocation}
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Experience:</span> {job.experience}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Job Type:</span> {job.jobType || "Full-time"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Required Skills:</span> {job.skills?.join(", ") || "Not Specified"}
                </p>
                <button
                  className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transition-colors hover:from-blue-600 hover:to-blue-800"
                  onClick={() => setSelectedJob(job)}
                >
                  Apply Now 
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <ApplicationForm 
          selectedJob={selectedJob} 
          onClose={() => setSelectedJob(null)}
        />
      )}
    </main>
  );
};

export default JobApplication;
