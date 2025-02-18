import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../css/NavBar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="user-navbar-container">
            <div className="user-navbar-content">
                {/* Logo */}
                <div className="user-navbar-logo">
                    <img src={logo} alt="Gamage Recruiters Logo" />
                </div>

                {/* Desktop Navigation Links (Hidden in Mobile) */}
                <ul className="user-navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Our Journey</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>

                {/* Sign In Button */}
                <button className="user-navbar-signin">Sign In</button>

                {/* Burger Icon for Mobile */}
                <div className="user-navbar-burger" onClick={toggleSidebar}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>

            {/* Sidebar for Mobile */}
            <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <button className="sidebar-close" onClick={toggleSidebar}>&times;</button>
                <ul className="sidebar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Our Journey</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>

            {/* Overlay to Close Sidebar */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        </nav>
    );
}
