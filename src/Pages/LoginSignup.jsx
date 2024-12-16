import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isLogin) {
      // Validation for Login
      if (!email || !password) {
        alert('Please enter the required fields');
        return;
      }
    } else {
      // Validation for Sign Up
      if (!name || !email || !password) {
        alert('Please enter the required fields');
        return;
      }
    }

    // If everything is valid, navigate to the home page
    navigate('/'); 
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        {isLogin ? (
          <>
            <h1>Login</h1>
            <div className="loginsignup-fields">
              <div className="input-icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input
                  type="email"
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-icon">
                <i className="fa fa-lock" aria-hidden="true"></i>
                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button onClick={handleSubmit}>Login</button>
            <p className='loginsignup-switch'>
              Don’t have an account?{' '}
              <span onClick={() => setIsLogin(false)}>Sign up here</span>
            </p>
          </>
        ) : (
          <>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <div className="input-icon">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  placeholder='Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input
                  type="email"
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-icon">
                <i className="fa fa-lock" aria-hidden="true"></i>
                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button onClick={handleSubmit}>Sign Up</button>
            <p className='loginsignup-switch'>
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)}>Login here</span>
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
