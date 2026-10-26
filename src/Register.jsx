import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [ user, setUser ] = useState({});
  const handleSubmit = async () => {
    // console.log(user)
    const res = await axios.post("http://localhost:9090/register",user)
    console.log(res.data)
    console.log(res.status)

  };
  return (
    <div>
      <h1>Registration Form</h1>
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
    </div>
  );
}