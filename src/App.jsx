import React from "react";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [ user, setUser ] = useState({});
  const handleSubmit = async () => {
    console.log(user)
    const res = await axios.post("http://localhost:9090/register",user)
    
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

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// export default function App() {
//   const [users, setUsers] = useState([]);
//   const fetchUsers = async () => {
//     const url = "http://localhost:9090/api/users";
//     const res = await axios.get(url);
//     setUsers(res.data);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ol>
//         {users &&
//           users.map((user) => (
//             <li key={user.id}>
//               {user.name}-{user.email}-{user.role}
//             </li>
//           ))}
//       </ol>
//     </div>
//   );
// }
