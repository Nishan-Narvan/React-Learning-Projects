

function Greeting({ name, age, location, gifurl, gifurl2}) {
    return (
      <>
        <h1>Hello, Hi! {name} </h1>
        <h2>Age: {age}</h2>
        <h2>Location: {location}</h2>
        <div><h3>Time will pass, jo karna hai karle, career skill mastery, music, japenese,network ki after few years when u look back on this time, regret nahi admiration ho</h3></div>
           
        <div> <img width="480px"src={gifurl2} alt="" /><img width="400px" src={gifurl} alt="" /></div>
        
            
      </>
    );
  }
  

  
  export default Greeting;
   