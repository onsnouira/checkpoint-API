import UserList from './UserList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
    setUsers(result.data)
    })
  })
 
    
  return (
    <div className="App">
      <header className="cards">
         {
          users.map((user,id)=>(
            <UserList key={id} user={user}/>
          ))
         }
       
       
      </header>
    </div>
  );
}

export default App;
