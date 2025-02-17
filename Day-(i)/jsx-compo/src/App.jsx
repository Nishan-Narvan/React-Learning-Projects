import React, { useEffect, useState } from 'react'


function App() {
  const username = "Nishan";
  let date=new Date().getHours();
  let  date2= new Date().toLocaleTimeString();
  let message = "Greeting";
  let imagesource="link";
  let stylevalue ;

  const[time,setTime]=useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    const inter=setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(inter);
  
  },[]);

//useState ka use kiya time ki state change/update karne ke liye
//Setinterval for changing ever 1 second
//Rendering mein multiple sate naa aye aur performance issues to use effect
const[mode,setMode]=useState('day');


 if(mode==='day'){
  if(date<=12){
    message = "Good Morning";
   imagesource = "☀️";
   stylevalue={
    backgroundColor:"#FFFAE3",
    color:"#6D4C41"
  };
  }else if(date<18){
     message ="Good Afternoon";
     imagesource="⛅";
     stylevalue={
      backgroundColor:"#E3F2FD",
      color:"#01579B"
     };
  }else{
     message="Good evening";
     imagesource="🌙";
     stylevalue={
      backgroundColor:"#1A237E",
      color:"#FFFFFF"
     };
  }
}else if(mode==='night'){
  stylevalue={
    backgroundColor:"#000000",
    color:"#FFFFFF"
  }
}



  
  return (
   <div style={stylevalue}><h1>React learning Day-1</h1>
   <button onClick={() => setMode(mode === 'day' ? 'night' : 'day')}>Change Mode</button>
     {/* <button onClick={()=>setMode('night')}>ChangeMode</button> */}
   <h1>Hello,{username}</h1>
   <h2> {message} {imagesource}</h2>
   <h2>Current Time : {time}</h2>
   </div>
  );
}


export default App
