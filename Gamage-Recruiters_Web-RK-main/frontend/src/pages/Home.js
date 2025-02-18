import React from 'react';
import Navbar from '../components/templates/NavBar';
import Footer from '../components/templates/Footer';
import '../css/Home.css';

function MainPage() {
    return (
        <div className="user-home-container">
            <Navbar />
            <div className="user-home-main-content">
                <div className="user-home-hero-section">
                    <div className="user-home-overlay"></div>
                    <div className="user-home-hero-content">
                        <h1 className="user-home-hero-title">GAMAGE RECRUITERS</h1>
                        <p className="user-home-hero-description">
                            Our Go-To Platform For Connecting Top Talent With Great Opportunities. 
                            Find Jobs Or Post Them To Hire The Best—Seamlessly And Efficiently!
                        </p>
                        <button className="user-home-contact-button">Contact Us</button>
                    </div>
                </div>
                <div className="user-home-industries-section">
                    <h2 className="user-home-industries-title">INDUSTRIES</h2>
                    
                </div>
            </div>
            <div className="container3">
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;
