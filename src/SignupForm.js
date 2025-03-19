import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './SignupForm.css';

const SignupForm = () => {
  const [userType, setUserType] = useState('');

  return (
    <div className="signup-container">
      {/* Left section with form */}
      <div className="form-box">
        <img src="/logo.png" alt="LegalLens " className="logo" />
        <h2>Create an Account</h2>
        <p>Kindly fill in your details to create an account</p>

        <form>
          <label htmlFor="fullname">Your fullname*</label>
          <input type="text" id="fullname" placeholder="Enter your fullname" required />

          <label htmlFor="email">Your email*</label>
          <input type="email" id="email" placeholder="Enter your email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Enter a valid email address"/>

          <label htmlFor="password">Password*</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          {/* User type selection */}
          <div className="user-type">
            <label>User Type</label>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  id="legalConsultant"
                  name="userType"
                  value="Legal Consultant"
                  checked={userType === "Legal Consultant"}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                />
                <label htmlFor="legalConsultant">Legal Consultant</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="civilian"
                  name="userType"
                  value="Civilian"
                  checked={userType === "Civilian"}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                />
                <label htmlFor="civilian">Civilian</label>
              </div>
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>

          <button type="submit" className="signup-btn">Sign up</button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="google-btn">
          <FaGoogle /> Register with Google
        </button>

        <p className="login-link">
          Already have an Account? <button className="link-btn">Login</button>
        </p>
      </div>

      {/* Right section with justice scale image using external link */}
      <div className="image-box">
        <img
          src="https://bharatchugh.in/wp-content/uploads/2020/12/pexels-photo-5669602.jpeg?w=823"
          alt="Justice Scale"
          className="justice-image"
        />
      </div>
    </div>
  );
};

export default SignupForm;
