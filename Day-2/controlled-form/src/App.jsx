import React from 'react'
import { useState } from 'react'



function App() {
 const[form,setForm]=useState("");

  return (
    <>
      <form onSubmit={(event)=>{
        event.preventDefault();
        alert(`Successful Submission, your username is : ${form}`);
      }}><label>Username Please:
        <input type="text" value={form} onChange={(e)=>setForm(e.target.value)} />
        </label>
        <button type="submit" >Submit Button</button>
        </form>
    </>
  )
}

export default App
