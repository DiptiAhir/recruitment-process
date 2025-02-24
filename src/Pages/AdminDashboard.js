import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboardHome = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplications: 0,
    interviewsScheduled: 0,
    offersSent: 0,
  });

  useEffect(() => {
    // Fetch dashboard statistics
    const fetchStats = async () => {
      try {
      // Fetch Total Jobs
      const jobsResponse = await axios.get("http://localhost:4000/api/v1/getAllJobRequisitions");
      const totalJobs = jobsResponse.data.length;

        // Fetch Total Applications
        const applicationsResponse = await axios.get("http://localhost:4000/api/v1/applications");
        const totalApplications = applicationsResponse.data.length;

        // Update State
        setStats((prevStats) => ({
          ...prevStats,
          totalJobs,
          totalApplications,
        }));
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold">Total Jobs</h2>
          <p className="text-2xl font-bold text-indigo-600">{stats.totalJobs}</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold">Total Applications</h2>
          <p className="text-2xl font-bold text-indigo-600">{stats.totalApplications}</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold">Interviews Scheduled</h2>
          <p className="text-2xl font-bold text-indigo-600">{stats.interviewsScheduled}</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold">Offers Sent</h2>
          <p className="text-2xl font-bold text-indigo-600">{stats.offersSent}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            className="bg-indigo-700 text-white p-4 rounded-lg text-lg hover:bg-indigo-800"
            onClick={() => navigate("/job-requisition")}
          >
            Create Job Requisition
          </button>
          <button 
          className="bg-indigo-700 text-white p-4 rounded-lg text-lg hover:bg-indigo-800"
          onClick={()=> navigate("/application-review")}
          >
            Review Applications
          </button>
          <button className="bg-indigo-700 text-white p-4 rounded-lg text-lg hover:bg-indigo-800">
            Schedule Interviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
