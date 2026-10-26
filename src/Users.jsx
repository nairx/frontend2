import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:9090/users");
    console.log(users)
    setUsers(res.data);
  };
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div>
      <h1>Users</h1>

      {users &&
        users.map((user) => (
          <li key={user.email}>
            {user.name}-{user.email}-{user.password}
          </li>
        ))}
    </div>
  );
}
