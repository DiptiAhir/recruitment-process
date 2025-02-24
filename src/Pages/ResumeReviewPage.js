import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeReviewPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [statusFilter, setStatusFilter] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  // Fetch candidates from the backend
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/candidates');
        setCandidates(response.data);
        setFilteredCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };
    fetchCandidates();
  }, []);

  // Filter candidates based on keyword and status
  useEffect(() => {
    let filtered = candidates;

    if (keyword) {
      filtered = filtered.filter((candidate) =>
        candidate.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (statusFilter.length > 0) {
      filtered = filtered.filter((candidate) =>
        statusFilter.includes(candidate.status)
      );
    }

    setFilteredCandidates(filtered);
  }, [keyword, statusFilter, candidates]);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/candidates/${id}`, { status });
      setCandidates((prev) =>
        prev.map((candidate) =>
          candidate._id === id ? { ...candidate, status } : candidate
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleNoteChange = async (id, notes) => {
    try {
      await axios.put(`http://localhost:5000/api/candidates/${id}`, { notes });
      setCandidates((prev) =>
        prev.map((candidate) =>
          candidate._id === id ? { ...candidate, notes } : candidate
        )
      );
    } catch (error) {
      console.error('Error updating notes:', error);
    }
  };

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Resume Review</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <select
          multiple
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(Array.from(e.target.selectedOptions, (opt) => opt.value))
          }
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          <option value="Applied">Applied</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Rejected">Rejected</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Offered">Offered</option>
        </select>
      </div>

      {/* Resume Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="px-4 py-2 text-left">Candidate Name</th>
            <th className="px-4 py-2 text-left">Applied Date</th>
            <th className="px-4 py-2 text-left">Resume</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Notes</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((candidate) => (
            <tr key={candidate._id} className="hover:bg-gray-100">
              <td className="px-4 py-2">{candidate.name}</td>
              <td className="px-4 py-2">{new Date(candidate.appliedDate).toLocaleDateString()}</td>
              <td className="px-4 py-2">
                <a
                  href={candidate.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Resume
                </a>
              </td>
              <td className="px-4 py-2">
                <select
                  value={candidate.status}
                  onChange={(e) => handleStatusChange(candidate._id, e.target.value)}
                  className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                >
                  <option className="bg-white hover:bg-indigo-100" value="Applied">
                    Applied
                  </option>
                  <option className="bg-white hover:bg-indigo-100" value="Shortlisted">
                    Shortlisted
                  </option>
                  <option className="bg-white hover:bg-indigo-100" value="Rejected">
                    Rejected
                  </option>
                  <option className="bg-white hover:bg-indigo-100" value="Interviewed">
                    Interviewed
                  </option>
                  <option className="bg-white hover:bg-indigo-100" value="Offered">
                    Offered
                  </option>
                </select>
              </td>
              <td className="px-4 py-2">
                <textarea
                  value={candidate.notes || ''}
                  onChange={(e) => handleNoteChange(candidate._id, e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => alert(`Viewing ${candidate.name}'s resume`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ResumeReviewPage;
