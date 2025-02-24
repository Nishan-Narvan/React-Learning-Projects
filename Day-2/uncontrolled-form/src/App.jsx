import React, { useRef } from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
const Ref=useRef(null)
  return (
    <>
    <form onSubmit={(event)=>{
      event.preventDefault();
      alert(`Hey, your username is ${Ref.current.value}`)
    }}>
      <label >Username through uncontrolled forms
        <input type="text" ref={Ref}/>
        <button type="submit">Submit button</button>
      </label>
    </form>
    </>
  )
}
// Here we practicising the use of uncontrolled components via useRef, refer to notes
export default App
