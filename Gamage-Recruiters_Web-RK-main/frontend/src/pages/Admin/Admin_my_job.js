import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/templates/AdminNavbar";
import Footer from "../../components/templates/Footer";
import Sidebar from "../../components/templates/ASidebar";
import '../../css/Admin/Admin_my_job.css';
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import adminLBoxImage from '../../assets/admin_l_box.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:7000/api/jobs")
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          setJobs([]);
        }
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
        setJobs([]);
      });
  }, []);

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedJob) return;
    try {
      const response = await fetch(`http://localhost:7000/api/jobs/${selectedJob.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        setJobs(jobs.filter(job => job.id !== selectedJob.id));
        toast.success("Job deleted successfully!");
      } else {
        toast.error("Failed to delete job!");
      }
    } catch (error) {
      toast.error("Error deleting job!");
    } finally {
      setShowModal(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="Admin_my_job-wrapper">
      <Navbar />
      <div className="Admin_my_job-content">
        <Sidebar />
        <div className="Admin_my_job-container center-container">
          <div className="table-container">
            <h1 className="table-title">My Jobs ({jobs.length})</h1>
            <table>
              <thead>
                <tr>
                  <th>JOBS</th>
                  <th>STATE</th>
                  <th>APPLICATIONS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {(jobs || []).map((job) => (
                  <tr key={job.id}>
                    <td>{job.job_title}</td>
                    <td>{job.state}</td>
                    <td>{job.applications_count || 0}  Applications</td>
                    <td>
                      <button className="view-btn" onClick={() => navigate(`/admin/applications/${job.id}`)}>View Applications</button>
                      <button className="delete-btn" onClick={() => handleDeleteClick(job)}>
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
      <Footer />

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: 'center' }}>
            <img
              src={adminLBoxImage}
              alt="Delete Confirmation"
              style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <p>Are you sure you want to permanently delete the job post: <strong>{selectedJob?.job_title}</strong>?</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete Job Post
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default AdminDashboard;
