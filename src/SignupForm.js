import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [pw, setpw] = useState("")
  const [role, setRole] = useState("Civilian")
  const [name,setName] = useState("")

  const navigate = useNavigate()

  const handleRoleChange=(e)=>{
    setRole(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
  
    try {
      const res = await axios.post('http://localhost:3000/create_user', {
        email: email,
        password: pw,
        role: role,
        name: name,
      });
  
      if (res.status === 201) {
        alert('User created successfully');
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('User already exists'); // Handle 409 Conflict
      } else {
        alert('Something went wrong. Please try again later.');
      }
    }
  };
  
  

  return (
    <div className="signup-container my-4">
     
      <div className="form-box">
        <h2 className='text-3xl font-bold'>Create an Account</h2>
        <p>Kindly fill in your details to create an account</p>

        <form>
          <label htmlFor="fullname">Your fullname*</label>
          <input type="text" id="fullname" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="enter your fullname" required />

          <label htmlFor="email">Your email*</label>
          <input type="email" id="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="enter your email" 
          title="Enter a valid email address"/>

          <label htmlFor="password">Password*</label>
          <input type="password" 
          value={pw}
          onChange={(e)=>setpw(e.target.value)}
          id="password" placeholder="Enter your password" required />


          <div className='flex flex-row space-x-4'>
            <input
              type="radio"
              value="Civilian"
              checked={role === 'Civilian'}
              onChange={handleRoleChange}
            />
            Civilian

            <input
            type="radio"
            value="Legal Professional"
            checked={role === 'Legal Professional'}
            onChange={handleRoleChange}
            />
            Legal Professional
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>
          <button onClick={handleSubmit} className="signup-btn">Sign up</button>
        </form>
        
            
        <p className="login-link">
          Already have an Account?<button className="link-btn"><a href='/'>Login</a></button>
        </p>
      </div>

    </div>
  );
};

export default SignupForm;
