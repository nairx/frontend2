import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:9090/login", {
        email,
        password,
      });
      if (res.data.success) {
        setMessage("Welcome");
      } else {
        setMessage("Access Denied");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div>
      <h1>Login Form</h1>
      {message}
      <p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}
