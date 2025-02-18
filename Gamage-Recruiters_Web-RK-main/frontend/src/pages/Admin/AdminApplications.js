import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaDownload, FaArrowLeft } from "react-icons/fa"; 
import Navbar from "../../components/templates/AdminNavbar";
import Footer from "../../components/templates/Footer";
import Sidebar from "../../components/templates/ASidebar";
import "../../css/AdminOverviewPage.css";

const AdminApplications = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [jobTitle, setJobTitle] = useState("Loading...");

  useEffect(() => {
    console.log("Fetching applications for jobId:", jobId);

    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://localhost:7000/admin/applications/${jobId}`);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setApplications(data);
          setJobTitle(data[0].job_title || "Job Title Not Available");
        } else {
          setApplications([]);
          setJobTitle("No Applications");
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
        setApplications([]);
        setJobTitle("Error Loading Job Title");
      }
    };

    fetchApplications();
  }, [jobId]);

  return (
    <div className="admin-overview-wrapper">
      <Navbar />
      <div className="admin-overview-content">
        <Sidebar />
        <div className="admin-overview-container">
          <div className="title-container">
            <FaArrowLeft className="back-icon" onClick={() => navigate(-1)} />
            <h2>{jobTitle}</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Experience</th>
                <th>Mobile number</th>
                <th>Email address</th>
                <th>CV/Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.name}</td>
                    <td>{app.experience_years}</td>
                    <td>{app.mobile_number}</td>
                    <td>{app.email}</td>
                    <td>
                      <a href={`http://localhost:7000/api/uploads/${app.cv_resume}`} download>
                        Download CV <FaDownload className="download-icon" />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>No applications found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminApplications;
