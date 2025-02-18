import React from "react";
import Navbar from "../../components/templates/NavBar";
import Footer from "../../components/templates/Footer";
import "../../css/AdminHomePage.css";

const AdminHomePage = () => { 
  return ( 
    <div className="gyskk-AdminHomePage-container">
      <Navbar />
      <div className="gyskk-AdminHomePage-content">
        <div className="gyskk-background-image">
          <div className="gyskk-content">
            <h1 className="gyskk-heading">GAMAGE RECRUITERS</h1>
            <p className="gyskk-text1">Our Go-To Platform For Connecting Top Talent With Great Opportunities.</p>
            <p className="gyskk-text2">Find Jobs Or Post Them To Hire The Best—Seamlessly And Efficiently!</p>
            <button className="gyskk-get-start-btn">Get Start</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminHomePage;