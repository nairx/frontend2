import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const url = "http://localhost:9090/api/users";
    const res = await axios.get(url);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ol>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.name}-{user.email}-{user.role}
            </li>
          ))}
      </ol>
    </div>
  );
}
