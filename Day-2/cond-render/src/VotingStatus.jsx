function VotingStatus({age}){
// if(age>=18){
//     if(age>60){
//         return <h2>"You are a senior citizen. Enjoy your benefits! 🎉"</h2>;
//     }else{
//         return <h3>You are eligible to vote!</h3>;
//     }
   
// }else if(age<60){
//         return <h3>You are not eligible to vote</h3>;
//     }

    const status =age>60 ? "You are a senior citizen. Enjoy your benefits! 🎉": age > 18 ? "You are eligible to vote! ": "You are not eligible to vote";
   return(
    <h3>{status}</h3>
   );
    }


export default VotingStatus;