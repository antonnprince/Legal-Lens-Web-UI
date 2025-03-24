import React, { useState } from "react";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>

      <h1 className="settings-title">Settings</h1>
      <p className="settings-description">
        Customize your Legal Lens experience.
      </p>

      <div className="settings-options">
        <div className="setting-item">
          <label>Dark Mode:</label>
          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <label>Notification Alerts:</label>
          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <label>Language:</label>
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  );
}
