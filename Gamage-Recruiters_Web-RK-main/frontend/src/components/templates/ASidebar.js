import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../../css/ASidebar.css';
import { FaClipboardList, FaPlusCircle, FaBriefcase, FaSignOutAlt } from 'react-icons/fa';

const ASidebar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Clear authentication data if needed (e.g., remove token from localStorage)
    localStorage.removeItem("authToken");

    // Redirect to Admin Home Page
    navigate("/Admin-home-page");
  };

  return (
    <div className="Asidebar">
      <ul>
        <li>
          <Link to="/Admin-over-viewpage" className="sidebar-link">
            <FaClipboardList className="icon" />
            <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/Admin-create-job" className="sidebar-link">
            <FaPlusCircle className="icon" />
            <span>Post a Job</span>
          </Link>
        </li>
        <li>
          <Link to="/Admin_my_job" className="sidebar-link">
            <FaBriefcase className="icon" />
            <span>My Jobs</span>
          </Link>
        </li>
      </ul>
      <ul className="logout">
        <li>
          <button onClick={handleLogout} className="sidebar-link logout-btn">
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ASidebar;
