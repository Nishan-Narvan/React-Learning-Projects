import { useState } from "react"
import React from "react"
import "./App.css"

function Counter (){
    const[state, setState]=useState(0);
    const[mode,setMode]=useState("light");
    const lightmode ={
        backgroundColor:"White",
        color: "black",
        transition: "background-color 0.5s ease, color 0.5s ease"
    
    };

    const darkMode={
    backgroundColor:"black",
    color:"white",
     transition: "background-color 0.5s ease, color 0.5s ease"

    };

    const currentStyle= mode=== "light" ? lightmode: darkMode;
    // agar mode light hai to style variable lightmode nahi to style variable darkmode
    return(
        <>
        <div style={currentStyle}>
        <h1>Counter app</h1>
         <h2 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Count {state}</h2>
         <div style={{display:"flex", alignItems:"center", justifyContent:"space-around" , gap:"30px"}}>
         <button onClick={()=>setState(state+1)}>Increase</button>
         <button onClick={()=>setState(state-1)}>Decrease</button>
         <button onClick={()=>setState(0)}>Reset</button>
         </div>
         <button  onClick={()=>setMode(mode === "light" ? "dark" : "light")}>Toggle</button>
         </div>
        </>

    );
}

export default Counter;