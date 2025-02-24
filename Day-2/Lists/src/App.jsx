import React, { useRef } from 'react'
import { useState } from 'react'

function App() {
  
const users =["Nishan","Hello","Bobby","Theo Von"];
const users2=[{ id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }];
const cities=["Panipat","Ambala","Delhi"];
  
  return (
    <>
   <ul>
    {users.map((user,index)=>(<li key={index} >{user}</li>))}
    
   </ul>
   <ul>
    {users2.map((user)=>(
      <li key={user.id}>{user.name}</li>
    ))}
   </ul>
  <ul>
    {cities.map((city,index)=>(
      <li key={index}>{city}</li>
    ))}
  </ul>
    </>
  )
}
// Here we practicising the use of uncontrolled components via useRef, refer to notes
export default App
