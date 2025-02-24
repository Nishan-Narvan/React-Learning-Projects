import React, { useEffect, useRef, useState } from "react" ;
import VotingStatus from "./VotingStatus";

function App() {
  const[input,setInput] = useState("");
  const[finalAge,setAge]=useState(0);
  useEffect(()=>{
    setAge(isNaN(input) || input === "" ? 0 : Number(input))


  },[input]);
const[form,setForm]=useState("");
const inputRef = useRef(null);


  return (
    <>
    
     <h3>Enter your age</h3>
     <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
     
     <VotingStatus age={finalAge}/>
     <button onClick={()=> alert(`Final age is going to be  : ${finalAge} ThankYou for checking status`)}>Click For status</button>
     <form >
      <label >Form 1 Label with useState
        <input type="text" value={form} onChange={(e) => setForm(e.target.value)}/>
        <button type="submit" onClick={() => alert(`Submitted Value: ${form}`)}>Submit</button>

      </label>
     </form>
     <form onSubmit={
      (event)=>{event.preventDefault();
      alert(`ref value: ${inputRef.current.value}`)
     }}>
      <label >
        label with useRef
        <input type="text" ref={inputRef} />
        <button type="submit">ShowRef</button>
      </label>
     </form>
    </>
  )
}

export default App
