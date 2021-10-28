import React from 'react';
import './login.css';

function Login() {
  return (
    <div>
      <div class="wrapper">
        <div class="login">
          <h1 class="loginTitle">Log in</h1>
          <form class="loginForm">
            <input
              class="loginUnsername"
              type="text"
              placeholder="Username"
            />
            <input
              class="loginPassword"
              type="password"
              placeholder="Parola"
            />
          </form>
          <button class="loginSubmit">
            <a href="#">Log in</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
