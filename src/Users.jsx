import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/data')
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA:", data);
        setUsers(data);
      })
      .catch((err) =>{
        console.error("Fetch Error",err);
      });
      
  }, []);

  return (
    <div>
      <h3>User Credentials:</h3>
      <table border="1" cellPadding= "8">
        <thead >
          <tr>
            
            <th><b>USERS</b></th>
            <th><b>PASSWORDS(hased)</b></th>
            </tr>
        </thead>
        <tbody>
          
          {users.map((user)=>{
            return  <tr key={user._id}>
                <td>{user.username}</td>
                <td> {user.password} </td>
              </tr>
          })}
         
        </tbody>
      </table>
    </div>
  );
}

export default Users;
