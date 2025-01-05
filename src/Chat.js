import React from "react";
import "./Chat.css";
// Uncomment the line below if the logo is in src../icons folder
// import logo from "./icons/logo.png";
import { useState } from "react";

function Chat() {

  const [userInput, setUserInput] = useState("")
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="menu">
          <div className="menu-item active">
            <img src="../icons/chats.png" alt="Chat" className="menu-icon" />
            Chat
          </div>
          <div className="menu-item">
            <img src="../icons/chathistory.png" alt="History" className="menu-icon" />
            Chat History
          </div>
          <div className="menu-item">
            <img src="../icons/aiassistant.png" alt="Personalities" className="menu-icon" />
            AI Personalities
          </div>
          <div className="menu-item">
            <img src="../icons/setting.png" alt="Settings" className="menu-icon" />
            Settings
          </div>
        </div>
        <div className="upgrade-button">
          <button>Upgrade to Pro</button>
          <p>Unlock powerful features with our pro upgrade today!</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="top-bar">
          {/* Top-right icons */}
          <div className="top-icons">
            <img src="../icons/notification.png" alt="Notifications" />
            <img src="../icons/userprofile.png" alt="User Profile" />
          </div>
        </div>
        {/* Centered heading */}
        <div className="center-heading">
          <div className="logo-title">
            {/* Uncomment the line below if using the imported logo */}
            {/* <img src={logo} alt="Logo" className="logo" /> */}
            <img src="../icons/legallogo.png" alt="Logo" className="logo" />
            <h1>LegalLens</h1>
          </div>
          <p>Your AI Legal Assistant</p>
        </div>

        <div className="query-box">
          <input type="text" placeholder="Enter your query here" 
          onChange={(e)=>setUserInput(e.target.value)}
          />
          <button
          onClick={()=>console.log(userInput)}
          >Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
