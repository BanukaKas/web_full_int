import React from 'react';
import '../../css/Footer.css';
import logo from "../../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="user-footer-container">
            <div className="container-fluid">
                <div className="user-footer-content">
                    {/* Logo and Company Section */}
                    <div className="user-footer-section">
                        <div className="user-footer-logo-container">
                            <img src={logo} alt="Gamage Recruiters" className="user-footer-logo" />
                        </div>
                        <h3 className="user-footer-company-name">GAMAGE RECRUITERS</h3>
                        <p className="user-footer-tagline">Ready to take the next step?</p>
                        <p className="user-footer-subtagline">Find your dream job or hire top talent today!</p>
                    </div>

                    {/* Navigation Section */}
                    <div className="user-footer-section">
                        <h4 className="user-footer-section-title">NAVIGATION</h4>
                        <ul className="user-footer-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                            <li><a href="/our-journey">Our Journey</a></li>
                        </ul>
                    </div>

                    {/* Industries Section */}
                    <div className="user-footer-section">
                        <h4 className="user-footer-section-title">INDUSTRIES</h4>
                        <ul className="user-footer-list">
                            <li><a href="/industries/shipping">Shipping / Freight</a></li>
                            <li><a href="/industries/hospitality">Hospitality</a></li>
                            <li><a href="/industries/it">Information Technology</a></li>
                            <li><a href="/industries/hr">Human Resources</a></li>
                            <li><a href="/industries/construction">Construction</a></li>
                            <li><a href="/industries/power">Power & Energy</a></li>
                        </ul>
                    </div>

                    {/* Work Hours Section */}
                    <div className="user-footer-section">
                        <h4 className="user-footer-section-title">WORK HOURS</h4>
                        <p className="user-footer-hours">8:30 AM - 5:30 PM, Mon-Fri</p>
                        <p className="user-footer-slogan">Elevate Your Hiring With<br />Gamage Recruiters!</p>
                        <button className="user-footer-contact-btn">Contact Us</button>
                    </div>
                </div>

                {/* Contact Info Row */}
                <div className="user-footer-contact-row">
                    <div className="user-footer-contact-item">
                        <i className="bi bi-geo-alt"></i>
                        <span>676/1 Colombo - Galle Main Rd, Panadura</span>
                    </div>
                    <div className="user-footer-contact-item">
                        <i className="bi bi-envelope"></i>
                        <span>gamagerecruiters@gmail.com</span>
                    </div>
                    <div className="user-footer-contact-item">
                        <i className="bi bi-telephone"></i>
                        <span>+94 474 95371</span>
                    </div>
                    <div className="user-footer-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
