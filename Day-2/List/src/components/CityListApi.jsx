import React, { useEffect, useState } from "react";

function CityListApi() {
    const [data,setApidata]=useState([]);
    // for storing api data
    const [loading,setLoading]=useState(true);
    // for Loading state
    const [error,setError]=useState(null);
    // for error handling
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")// ✅ API Call
        .then((response)=>{if(!response.ok){ // .then for response into json
            throw new Error("Failed to fetch data"); // ✅ Agar API fail ho jaye
        }return response.json(); // ✅ Response ko JSON me convert karo

        })
        .then((data)=>{    //.then for data storage
       
        const cityNames = data.map((users)=>users.address.city);//extraction of data
        setApidata(cityNames);// state mein data storage
        setLoading(false); // Now, falsify the loading
      
    
          })                 //.catch for error handling
        
        
        
        
          .catch((err)=>{
            setError(err.message); //Error store karo
            setLoading(false);
        
        
        
        
        });
},[]);  // Empty array means sirf ek baar chalega 


  return( <>
  <div>
  <h2>City List from API</h2>
  {loading && <p>Loading...</p>}
  {error && <p style={{ color: "red" }} >{error}</p>}
  <ul>
    {data.map((city,index)=>(
        <li key={index}>{city} </li>
        ))}
  </ul>
  </div>
  <style>{`
        .spinner {
          width: 40px;
          height: 40px;
          border: 5px solid #ddd;
          border-top-color: #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
  </>
)
}

export default CityListApi;
