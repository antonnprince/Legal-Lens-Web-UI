import React, { useState } from "react";
import "./Chat.css";
import axios from "axios";

function Chat() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendQuery = async (query) => {
    if (!query.trim()) return;
    setChatHistory([...chatHistory, { sender: "user", message: query }]);
    setUserInput("");

    try {
<<<<<<< HEAD
      const res = await axios.post("https://ca31-35-247-132-13.ngrok-free.app/predict", { text: query });
      if (res && res.data) {
        const botMessage = res.data.prediction;

        // Add bullet points logic here if message contains multiple sections.
        const messageAsPoints = botMessage.includes("\n\n")
          ? botMessage.split("\n\n") // Split response if paragraphs exist.
          : [botMessage]; // Otherwise, keep as a single item.

=======
      const res = await axios.post("https://06f0-34-87-84-12.ngrok-free.app/predict", { text:query });
      if (res) {
        console.log(res)
>>>>>>> c8afd2bab5426fbb2fb0dde1b6d54832021f7dde
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", message: messageAsPoints }, // Store message as an array of strings (points).
        ]);
      }
    } catch (error) {
      console.error("Error sending query:", error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", message: ["Sorry, something went wrong."] },
      ]);
    }
  };

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
            <a href="/profile">Profile</a>
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
        <div className="chat-window">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`chat-message ${chat.sender === "user" ? "user" : "bot"}`}
            >
              {Array.isArray(chat.message) ? (
                <ul className="bot-response-list">
                  {chat.message.map((point, idx) => (
                    <li key={idx} className="chat-point">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                chat.message
              )}
            </div>
          ))}
        </div>

        <div className="query-box">
          <input
            type="text"
            placeholder="Enter your query here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") sendQuery(userInput);
            }}
          />
          <button onClick={() => sendQuery(userInput)}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
