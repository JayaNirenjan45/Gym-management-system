import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      navigate("/home"); // Redirects to Homepage.jsx
    } else {
      alert("Please enter a valid name");
    }
  };

  return (
    <div className="container">
      {/* Background Shapes */}
      <div className="shape1"></div>
      <div className="shape2"></div>

      {/* Login Box */}
      <div className="login-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="toggle-text" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
