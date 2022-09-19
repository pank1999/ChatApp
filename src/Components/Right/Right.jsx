import axios from "axios";
import { useEffect, useState } from "react"
import NotificationCard from "../RightNotificationCard/NotificationCard"
import Suggetions from "../Suggestions/Suggetions"
import "./Right.css"

export default function Right({loggedUser}) {
     const [suggestedUsers,setSuggestedUser]=useState([]);

     useEffect(()=>{
          const getSuggestions= async()=>{
               try{
                    const res=await axios.get("http://localhost:3001/api/Users");
                    setSuggestedUser(res.data);
               }catch(err){
                     console.log(err);
               }
          }
          getSuggestions();
     },[])

     return (
    <div className="Right">
        <div className="r-top">
             <h3>Notifications</h3>
             <div className="r-notification">
                 <NotificationCard />
                 <NotificationCard />
                 <NotificationCard />
                 <NotificationCard />

             </div>
        </div>
        <div className="r-bottom">
             <h3>Suggestions</h3>
             <div className="suggestion-container">
                  {
                    suggestedUsers.map((user)=>(
                       <Suggetions loggedUser={loggedUser} user={user} />
                    ))
                  }
                  {/* <Suggetions/>
                  <Suggetions/>
                  <Suggetions/> */}
             </div>
        </div>
    </div>
  )
}
