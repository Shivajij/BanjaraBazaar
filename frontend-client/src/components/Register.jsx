import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form className="auth-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button className="btn-primary">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;