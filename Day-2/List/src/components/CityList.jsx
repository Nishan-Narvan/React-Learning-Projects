import React from "react";
import { useState } from "react";

function CityList (){

const[cities,setCities]=useState(["Panipat","Ambala","Delhi"]);
  // For remove functionality
  
  const[cities2,setCities2]=useState(["Nagpur","Mumbai","Pune"]);
  // For iteration of list, cities2 is a array

  const [cityName2, setCityName2] = useState("");
  // Using input field to store string here and pushing it to Addcity


 const [editCity,setEditCity]=useState(null);
  // A state for editing city for edit button





  function removeCity(cityname){
   const updated=cities.filter(city=>city!==cityname);
    setCities(updated);



    // hume ab naya function ban arahe hai to ek aur parameter lena padega to cityname, aur filter meinn bas new array ki defination likh di
    
    
    // cities.filter(city=> city!==cityname) un hi city ko cities array mein filter karo jo city name variable ke equal nahi hai 
  }    




   
  function AddCity() {
    if (!cityName2.trim()) return; // ✅ Empty input check
    
    setCities2([...cities2, cityName2]); // ✅ New city add using spread operator
    setCityName2(""); // ✅ Reset input field
  }



  // ✅ Edit button click hone pe ye chalega
 function startEdit(city) {
  setEditCity(city);  // Jo edit kar raha hai wo store kar lo
  setCityName2(city); // Input field me wo naam show ho
}




function updateCity() {
  if (!editCity) return; // Agar editCity null hai to kuch mat karo

  const trimmedNewCity = cityName2.trim().toLowerCase();
  const trimmedEditCity = editCity.trim().toLowerCase();
//trimmedNewCity for checking if edit city in inputTag if already exists so don't update cities2 array state rather show alert 
const isDuplicate = cities2.some(city => city.trim().toLowerCase() === trimmedNewCity);
  if (isDuplicate) {
    alert("City already exists!");
    return;
  }else{


    setCities2(cities2.map(city => 
      city.trim().toLowerCase() === trimmedEditCity ? cityName2 : city
    ));
  
  setCityName2("");   // Input field clear karo
}}
//pupose is to add that city in editcity to the list
// ki editcity state mein via edit button jo value aaye, agar vo array ke kisi element se match kare to , city Name 2 mein jo vai startEdit value di hai vo replace kar do nahi match karti to to city map kar do 



  return (
    <>
     <ul>
      {cities.map((city,index)=>(
        <li   key={index} >{city} <button onClick={()=>removeCity(city)}>Remove</button></li>
        
      ))}
      {/* city is variable for iterating over the array */}
      
      
      
      
      {/* hame ek variable city lena hota hai jo har 
      element of array ko represent kare */}
    
    
    
    
     </ul>
     

    
    <input type="text" value={cityName2} onChange={(e) => setCityName2(e.target.value)} />
    {/* Ab user jo bhi likhega, wo cityName2 me store hoga. */}
    {editCity ? (<button onClick={updateCity}>Update City</button>) : (<button onClick={AddCity}>Add City</button>)}


    
    <ul>
  {cities2.map((city, index) => (
    <li key={index}>{city} <button onClick={()=>startEdit(city)}>Edit</button></li>
    // Iteration using map and putting into list
  ))}
</ul>

</>

)
}
    
 export default    CityList;