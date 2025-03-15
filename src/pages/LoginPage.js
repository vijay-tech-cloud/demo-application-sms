import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css"; // Import CSS module
import backgroundImage from "../assets/images/loginbg.png"; // Background image

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>SSPD SMS</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.loginButton}>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
