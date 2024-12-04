import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from './firebase';
import './Signup.css';

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const CreateUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Success!!');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="content-container">
        <div className="form-container">
          <div className="logo">
            <h1>Get in Touch</h1>
          </div>
          <form onSubmit={CreateUser}>
            {error && <p className="error-message">{error}</p>}

            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter your first name"
            />
            <br />

            <input
              type="text"
              name="Last-Name"
              id="Last-Name"
              placeholder="Enter your last name"
            />
            <br />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="Email"
              id="Email"
              placeholder="Enter your email id"
              required
            />
            <br />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="Password"
              id="Password"
              placeholder="Create your password"
              required
            />
            <br />

            <div className="CTA-BTN">
              <button type="submit">Submit</button>
            </div>

            <div className="login-prompt">
              <p>
                Already have an account?{' '}
                <a href="/login" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
