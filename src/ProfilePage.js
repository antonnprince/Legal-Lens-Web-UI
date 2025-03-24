import React, { useState } from "react";
import "./ProfilePage.css"; // Ensure you move the CSS too
import profilePic from "./profile.jpg"; // Move the images to 'assets'
import logo from "./logo.png";
import logoutIcon from "./logout.png";

const ProfilePage = () => {
  const [accountTypeVisible, setAccountTypeVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);

  return (
    <div className="profile-container-wrapper">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>← Back</button>

      {/* Logo & Title */}
      <div className="title-container">
        <img src={logo} alt="LegalLens Logo" className="logo" />
        <h1 className="app-title">LegalLens</h1>
      </div>

      {/* Profile Container */}
      <div className="profile-container">
        <h2 className="welcome-text">Welcome Mr. George.!</h2>

        {/* Profile Section */}
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profilepage-pic" />
          <div className="edit-icon">✏️</div>
        </div>

        {/* User Name */}
        <h3 className="user-name">George Thomas</h3>

        {/* Account Type Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setAccountTypeVisible(!accountTypeVisible)}
          >
            Account type {accountTypeVisible ? "▲" : "▼"}
          </button>
          {accountTypeVisible && (
            <div className="dropdown-content">
              <p>Legal consultant</p>
              <p>Civilian</p>
            </div>
          )}
        </div>

        {/* History Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setHistoryVisible(!historyVisible)}
          >
            History {historyVisible ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {/* Logout Button */}
     
      <button className="logout-btn" >
      
        Logout <img src={logoutIcon} alt="Logout" className="logout-icon" />
      </button>
      
    </div>
  );
};

export default ProfilePage;
