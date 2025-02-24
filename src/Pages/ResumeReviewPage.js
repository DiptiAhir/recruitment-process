import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplicationReview = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [jobSkills, setJobSkills] = useState("");

  // Fetch Applications from Server
  const fetchApplications = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/applications");
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast.error("Failed to fetch applications");
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatusChange = async (id, status, email) => {
    if (status === "Accepted") {
      const confirmSend = window.confirm("Are you sure you want to send the interview email?");
      if (!confirmSend) return;

      try {
        await axios.post("http://localhost:4000/api/v1/send-email", {
          email,
          subject: "Interview Invitation",
          message: "Congratulations! You have been selected for an interview. Please check your email for further details."
        });
        toast.success("Interview email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send interview email");
      }
    }

    try {
      await axios.put(`http://localhost:4000/api/v1/applications/${id}`, { status });
      toast.success(`Status updated to ${status}`);
      fetchApplications();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  // Delete an Application
  const handleDeleteApplication = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this application?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:4000/api/v1/applications/${id}`);
      toast.success("Application deleted successfully!");
      fetchApplications();
    } catch (error) {
      console.error("Error deleting application:", error);
      toast.error("Failed to delete application");
    }
  };

  const filteredApplications = applications.filter((app) => {
    return (
      (app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter ? app.status === statusFilter : true) &&
      (jobSkills ? app.skills?.some((skill) => skill.toLowerCase().includes(jobSkills.toLowerCase())) : true)
    );
  });

  return (
    <main className="container mx-auto py-8 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Application Review</h1>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-end mb-4">
        <input
          type="text"
          placeholder="Search by Name or Job Title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-72 shadow-sm focus:ring focus:ring-blue-300"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded shadow-sm bg-white"
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Applications Table */}
      <div className="overflow-x-auto">
        {filteredApplications.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Job Title</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Experience</th>
                <th className="border px-4 py-2">Skills</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50 transition">
                  <td className="border px-4 py-2">{app.name}</td>
                  <td className="border px-4 py-2">{app.jobTitle}</td>
                  <td className="border px-4 py-2">{app.email}</td>
                  <td className="border px-4 py-2">{app.experience} years</td>
                  <td className="border px-4 py-2">{app.skills?.join(", ")}</td>
                  <td className="border px-4 py-2">
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(app._id, e.target.value, app.email)}
                      className={`border rounded px-2 py-1 bg-gray-100 
                        ${app.status === "Pending" ? "text-yellow-500" : ""} 
                        ${app.status === "Reviewed" ? "text-blue-500" : ""} 
                        ${app.status === "Accepted" ? "text-green-500" : ""} 
                        ${app.status === "Rejected" ? "text-red-500" : ""}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Reviewed">Reviewed</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDeleteApplication(app._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-8">
            <p className="text-xl font-semibold text-gray-600">No applications found.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ApplicationReview;
