import React, { useState, useEffect } from "react";
import { FaClipboardList, FaBriefcase, FaTrashAlt } from "react-icons/fa";
import Navbar from "../../components/templates/AdminNavbar";
import Footer from "../../components/templates/Footer";
import Sidebar from "../../components/templates/ASidebar";
import "../../css/AdminOverviewPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [totalApplications, setTotalApplications] = useState(0);

  useEffect(() => {
    // Fetch posted jobs
    fetch("http://localhost:7000/api/jobs")
      .then((response) => response.json())
      .then((data) => setPostedJobs(data))
      .catch((err) => console.error("Error fetching posted jobs:", err));

    // Fetch total applications count
    fetch("http://localhost:7000/api/admin/applications/count")
      .then((response) => response.json())
      .then((data) => setTotalApplications(data.total))
      .catch((err) => console.error("Error fetching applications count:", err));
  }, []);

  const handleDelete = async (jobId) => {
    console.log("Deleting job ID:", jobId); // Debugging log
    try {
      const response = await fetch(`http://localhost:7000/api/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setPostedJobs(postedJobs.filter((job) => job.id !== parseInt(jobId))); // Ensure type consistency
        toast.success("Job deleted successfully!");
      } else {
        const errorData = await response.json();
        toast.error(`Failed to delete job: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("Error deleting job!");
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="admin-overview-wrapper">
      <Navbar />
      <div className="admin-overview-content">
        <Sidebar />
        <div className="admin-overview-container">
          <h2>Hello, Welcome</h2>
          <p>Here Is Your Daily Activities And Applications</p>

          <div className="admin-stats">
            <div className="stat-box purple">
              <div className="stat-text">
                <h3>{postedJobs.length}</h3>
                <p>Posted Jobs</p>
              </div>
              <FaBriefcase className="stat-icon" />
            </div>
            <div className="stat-box orange">
              <div className="stat-text">
                <h3>{totalApplications}</h3>
                <p>New Applications</p>
              </div>
              <FaClipboardList className="stat-icon" />
            </div>
          </div>

          <div className="admin-table">
            <h3 className="table-title">Recently Posted Jobs</h3>
            <table>
              <thead>
                <tr>
                  <th>JOBS</th>
                  <th>STATE</th>
                  <th>Applications</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {postedJobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.job_title}</td>
                    <td>{job.state}</td>
                    {/* Assuming totalApplications is global for simplicity */}
                    <td>{totalApplications} Applications</td>
                    <td>
                      {/* View Applications Button */}
                      <button
                        className="view-btn"
                        onClick={() =>
                          (window.location.href = `/admin/applications/${job.id}`)
                        }
                      >
                        View Applications
                      </button>

                      {/* Delete Button */}
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(job.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer and Toast Notifications */}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default AdminDashboard;
