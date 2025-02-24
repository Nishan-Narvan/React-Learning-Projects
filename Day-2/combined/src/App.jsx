import { useRef } from 'react'
import { useState } from 'react'


function App() {
  const [username, setUsername] = useState("")
 const Ref=useRef(null)
  return (
    <>
     
     
     <form onSubmit={(e)=>{e.preventDefault()
     alert(`Hey your username is ${username} the age is :${Ref.current.value}`)
     }
     } >
      <label >Username using controlled component(usestate)
        <input type="text" value={username} onChange={(e)=>(setUsername(e.target.value))} />
        <br />
       
      Age with uncontrolled[useRef]
       <input type="text" ref={Ref} />
       <button type='submit'>Submit Button</button>
    
      </label>
     </form>
     
      
    </>
  )
}

export default App
