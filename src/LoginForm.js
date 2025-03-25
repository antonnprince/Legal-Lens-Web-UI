import React from "react";
import "./App.css"; // CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


function LoginPage() {
  const [user,setUser] = useState({email:"",password:""})
  const navigate = useNavigate()

  const getInfo = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.get(`http://localhost:3000/login/${user.email}/${user.password}`);
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data)); 
        if(res.data.role!='Civilian')
        {
          navigate('/chat')
        }
        else
        {
          navigate('/search')
        }
        
      } 
      else {
        alert("No user found in try");
      }
    } catch (error) {
      alert("No user found");
      window.location.reload();
    }
  };
  
  return (
    <div className="login-container ">
      <div className="login-form my-4">
        
       
        <h2
        className="text-3xl font-bold text-center"
        >Login Here</h2>
        <form onSubmit={getInfo}>

          <div className="form-group my-8">
            <label htmlFor="email"
            className="text-lg font-bold mb-0"
            >Your email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required  
              className="mb-8 rounded-lg"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Enter a valid email address"

              onChange={(e)=>{setUser((prevUser) => ({
                ...prevUser,          // Spread operator to keep other fields unchanged
                email: e.target.value // Update only the 'email' field
              }));
               console.log(user)}}
            />  

            <label htmlFor="password"
            className="text-lg font-bold"
            >Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e)=>{
                setUser((prevUser) => ({
                  ...prevUser,          // Spread operator to keep other fields unchanged
                  password: e.target.value // Update only the 'email' field
                }));
                ; console.log(user)}}
            />
            
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to terms & conditions</label>
          </div>

          
          <button 
          type="submit"
          className="btn primary-btn">
              Sign in
          </button>
        </form>
     
          <p className="signup-link">
            Don't have an Account? <a href="/signup">Create an account</a>
          </p>
     
      </div>
    </div>
  );
}

export default LoginPage;
