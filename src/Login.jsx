import React from "react";
import { useState } from "react";
export default function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
  return (
    <div>
      <h1>Login Form</h1>
      <p>
        <input type="text" placeholder="Email" />
      </p>
      <p>
        <input type="text" placeholder="Password" />
      </p>
      <p>
        <button>Login</button>
      </p>
    </div>
  );
}
