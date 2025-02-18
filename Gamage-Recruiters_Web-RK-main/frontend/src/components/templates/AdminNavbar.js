import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../css/AdminNavBar.css';
import logo from '../../assets/logo.png';

export default function AdminNavbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="admin-navbar-container">
            <div className="admin-navbar-content">
                {/* Logo */}
                <div className="admin-navbar-logo">
                    <img src={logo} alt="Gamage Recruiters Logo" />
                    <span className="admin-navbar-title">Gamage Recruiters</span>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="admin-navbar-links">
                    <li><Link to="/Admin-Home-Page">Home</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/testimonial">Testimonial</Link></li>
                    <li><Link to="/our-journey">Our Journey</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>

                {/* Sign In Button */}
                <button className="admin-navbar-signin">Sign In</button>

                {/* Burger Icon for Mobile */}
                <div className="admin-navbar-burger" onClick={toggleSidebar}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
            
            {/* Sidebar for Mobile */}
            <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <button className="sidebar-close" onClick={toggleSidebar}>&times;</button>
                <ul className="sidebar-links">
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="/careers" onClick={toggleSidebar}>Careers</Link></li>
                    <li><Link to="/testimonial" onClick={toggleSidebar}>Testimonial</Link></li>
                    <li><Link to="/our-journey" onClick={toggleSidebar}>Our Journey</Link></li>
                    <li><Link to="/contact-us" onClick={toggleSidebar}>Contact Us</Link></li>
                    <li><Link to="/about-us" onClick={toggleSidebar}>About Us</Link></li>
                </ul>
            </div>

            {/* Overlay to Close Sidebar */}
            {isSidebarOpen && <div className="admin-sidebar-overlay" onClick={toggleSidebar}></div>}
        </nav>
    );
}
