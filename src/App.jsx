import React from "react";
import Register from "./Register";
import Login from "./Login";
import Users from "./Users";

export default function App() {
  return (
    <div>
      <div style={{ display: "flex"}}>
        <div>
          <Register />
        </div>

        <div>
          <Users />
        </div>
      </div>

      <hr />
      <div>
        <Login />
      </div>
    </div>
  );
}
