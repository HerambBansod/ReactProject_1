import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="content-container">
        <div className="form-container">
          <div className="logo">
            <h1>Welcome Back!</h1>
          </div>
          <form action="POST">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Enter your email id"
            />
            <br />
            <input
              type="password"
              name="Password"
              id="Password"
              placeholder="Enter your password"
            />
            <br />
            <div className="CTA-BTN">
              <button className="submit-btn">Login</button>
              <button className="signup-btn">Don't Have Account?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
