import "./App.css";
import Header from "./Components/Header/Header";
import LeftTop from "./Components/LeftTop/LeftTop";
import {AddCircle, Search} from "@mui/icons-material";
import LeftCard from "./Components/LeftCard/LeftCard";
import Center from "./Components/Center/Center";
import Right from "./Components/Right/Right";
import {useSelector} from "react-redux";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {io} from "socket.io-client";
import UserProfile from "./Components/UserProfile/UserProfile";


function App() {
  const user = useSelector((state)=>state.user.user);
  console.log(user);
  const [currChat,setCurrChat]=useState();
  const [conversation,setConversation]=useState([]);
  const socket =useRef();
  const [userProfile,setUserProfile]=useState(false);

  useEffect(()=>{
     socket.current=io("ws://localhost:8900");
  },[])
  useEffect(()=>{
     socket.current.emit("addUser",user.user._id);
     socket.current.on("getUsers",users=>{
        console.log(users);
     });
  },[user]);

  useEffect(()=>{
    socket.current?.on("welcome",message=>{
      console.log(message);
    });
  },[socket]);

  useEffect(()=>{
    const getConversation=async ()=>{
      try{
         const res=await axios.get(`http://localhost:3001/api/Conversation/`+user.user._id);
        // console.log(res.data);
        setConversation(res.data);
      }catch(err){
       console.log(err);
      }
    }
     getConversation();

  },[user._id]);
    console.log(currChat);
  return (
    <div>
        <Header/>
        <div className="App">
          <div className="left">
               <LeftTop loggedUser={user} setUserProfile={setUserProfile} UserProfile={userProfile} /> 
               <div className="leftTitle">
                   <h2>Chats</h2>
                  <AddCircle style={{color:"rgb(135, 16, 214)",cursor:"pointer"}} />
               </div>
               <div className="LeftMenu">
                   <p style={{color:"black"}} >Direct <span className="leftNotificationSpan">2</span></p>
                   <p>Group</p>
                   <p>People</p>
               </div>
               <div className="search">
                   <Search style={{fontSize:"14px",paddingLeft:"10px"}} />
                  <input type="text" placeholder="search"  />
               </div>
               <div className="LeftCardContainer">

                { conversation.map((c)=>(
                  <div onClick={()=>setCurrChat(c)} > 
                     <LeftCard conversation={c}  currUser={user.user} />
                  </div>   
                )) }
                  {/* <LeftCard />
                  <LeftCard />
                  <LeftCard /> */}
               </div>
          </div>
          <div className="center">
               {
                  userProfile ? <UserProfile user={user} setUserProfile={setUserProfile} /> : <Center currChat={currChat} socket={socket} user={user} />
               }
          </div>
          <div className="right">
               <Right loggedUser={user} />
          </div>
        </div>
    </div>
   
  );
}

export default App;
