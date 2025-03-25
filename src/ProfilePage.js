import React, { useState,useEffect } from "react";
import "./ProfilePage.css"; // Ensure you move the CSS too
import profilePic from "./profile.jpg"; // Move the images to 'assets'
import {useNavigate} from "react-router-dom"

const ProfilePage = () => {
  const [user, setUser] = useState({});
  let currentUser
  const navigate=useNavigate()

  useEffect(() => {
    return () => {
      currentUser = localStorage.getItem('user')
      console.log(JSON.parse(currentUser))
      setUser(JSON.parse(currentUser))
    }
  },[])

  const handleLogout=()=>{
    localStorage.removeItem('user')
    navigate('/')
  }
  
  return (
    <div className="profile-container-wrapper">
      
      <button className="back-button" onClick={() => window.history.back()}>← Back</button>

      
      <div className="title-container">
        {/* <img src={logo} alt="LegalLens Logo" className="logo" /> */}
        <h1 className="app-title">Your Profile!</h1>
      </div>

     
      <div className="profile-container">
        <h2 className="welcome-text">Welcome back <span className="font-bold text-xl">{user.name}</span></h2>


        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profilepage-pic" />
          <div className="edit-icon">✏️</div>
        </div>

        <h3 className="user-name  my-2 font-bold text-2xl">{user.name}</h3>

        
        <div className="dropdown-btn">  
            <h2><span className='text-lg font-bold'>Account type:</span> {user.role}</h2>
            <h2><span className='text-lg font-bold'>Email:</span> {user.email}</h2>
            <h2><span className='text-lg font-bold'>Specialization:</span> {user.specialization}</h2>
        </div>
      </div>

     
     
      <button className="logout-btn text-lg font-thin px-3 py-1 rounded-full" 
            onClick={handleLogout}
            >
                Logout⬅️
            </button>
      
    </div>
  );
};

export default ProfilePage;
