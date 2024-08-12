import React from 'react';
import { loginEndpoint } from '../../spotify';
import './login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="welcome-section">
          <h2 style={{textAlign:'center'}}>Welcome to</h2>
          <div className="logo">
            <h1>Infinito x</h1>
            <img src="\Spotify-Logo-PNG.png" alt="React Image" />
            
          </div>
          
        </div>
        <div className="signin-section">
          <h2 style={{textAlign:'center'}}>Sign in</h2>
          <form>
            <div className="input-field">
              <label>User Name</label>
              <input type="text" placeholder="User Name" required />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <a href={loginEndpoint}>
              <div className="login-btn">Sign in</div>
            </a>
          </form>
          <div className="or">Or</div>
          <a href={loginEndpoint}>
            <div className="login-alt-btn">Sign in with other</div>
          </a>
          <div className="signup-link">
            Don't have an account? <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
