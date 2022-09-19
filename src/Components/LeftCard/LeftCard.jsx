import axios from "axios";
import { useEffect, useState } from "react";
import "./LeftCard.css";

export default function LeftCard({currUser,conversation}) {
  const [user,setUser]=useState({});

  useEffect(()=>{
      const FriendId=conversation.members.find(m=>m!== currUser._id);
      const getUser=async()=>{
        try{
             const res=await axios.get("http://localhost:3001/api/Users/"+FriendId);
             //console.log(res.data);
             setUser(res.data);
        }catch(err){
             console.log(err);
        }
      }
      getUser();
  },[currUser,conversation]);

  return (
    <div className="LeftCard">
        <div>
            <img className="profile-img" src={user.img ? user.img: "https://media-exp1.licdn.com/dms/image/C4D03AQGdaSIXe9cqjw/profile-displayphoto-shrink_800_800/0/1619779363742?e=1666828800&v=beta&t=xOGUaD-oYYYtcscc15WrZjMokRwPkNazussxPXgpMdI"} alt="" />
        </div>
        <div>
            <h4>{user.name}</h4>
            <p>software developer</p>
        </div>
        <div className="cardTime">
            <span className="time">2:30 pm</span>
            <span className="numberOfMessage">3</span>
        </div>
    </div>
  )
}
