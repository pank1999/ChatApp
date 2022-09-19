import axios from "axios";
import "./Suggetions.css";

export default function Suggetions({user,loggedUser}) {
  const handleClick=async()=>{
     try{
         const res=await axios.post("http://localhost:3001/api/Conversation",
         { 
            senderId:loggedUser.user._id,
            receiverId:user._id
         });
         console.log(res);

     }
     catch(err){
           console.log(err);
     }

  }
  return (
    <div className="Suggestions">
         <img src={user.img} alt="" />
         <div className="s-info">
            <h4> {user.name}</h4>
            <p>12 Mutuals</p>
         </div>
         <button className="s-button" onClick={handleClick} >Add</button>
    </div>
  )
}
