import React, { useState } from "react";
import "./AIPage.css";

export default function AIPage() {
  return (
    <div className="ai-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>

      <h1 className="ai-title">AI Personalities</h1>
      <p className="ai-description">
        Choose an AI personality that best fits your legal research style.
      </p>

      <div className="ai-cards">
        <div className="ai-card">
          <h2>Legal Expert</h2>
          <p>Provides in-depth case analysis and legal precedent insights.</p>
          <button className="btn select-btn">Select</button>
        </div>

        <div className="ai-card">
          <h2>Case Strategist</h2>
          <p>Suggests legal strategies based on historical case data.</p>
          <button className="btn select-btn">Select</button>
        </div>

        <div className="ai-card">
          <h2>Quick Researcher</h2>
          <p>Finds and summarizes relevant legal documents fast.</p>
          <button className="btn select-btn">Select</button>
        </div>
      </div>
    </div>
  );
}
