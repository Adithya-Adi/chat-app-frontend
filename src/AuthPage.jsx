/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/authenticate", { username: username, secret: password })
      .then((r) => props.onAuth({ ...r.data, secret: password }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
        <input
            className="auth-input"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <div className="error-message">{error}</div>}
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;