import React from 'react';
import './login.css';

function Login() {
  return (
    <div>
      <div className="wrapper">
        <div className="login">
          <h1 className="loginTitle">Log in</h1>
          <form className="loginForm">
            <input
              className="loginUnsername"
              type="text"
              placeholder="Username"
            />
            <input
              className="loginPassword"
              type="password"
              placeholder="Parola"
            />
          </form>
          <button className="loginSubmit">
            <a href="/">Log in</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
