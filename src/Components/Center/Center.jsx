import { EmojiEmotions, Link, Mic, MoreHoriz, Phone, Send, VideoCall } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./Center.css";
import Message from "./Message/Message";
import {io} from "socket.io-client";

export default function Center({currChat,user}) {
     const [newMessage,setNewMessage]=useState("");
    const [message,setMessage]=useState([]);
    // const scrollRef=useRef();
    const [arivalMessage,setArrivalMessage]=useState(null);
    const socket =useRef();
    // console.log(currChat.members[1]);
    const [currChatUser,setCurrChatUser]=useState({});

   
    useEffect(()=>{
        const getCurrChatUser=async()=>{
            try{
                 const res=await axios.get(`http://localhost:3001/api/Users/${currChat.members[1]}`);
                //  console.log(res);
                 setCurrChatUser(res.data);
            }catch(err){
               console.log(err);
            }
        }
        getCurrChatUser();
    },[currChat]);

    useEffect(()=>{
       socket.current=io("ws://localhost:8900");
    },[])

    useEffect(()=>{

        socket.current.on("getMessage",(data)=>{
            setArrivalMessage({
                sender:data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        });
    },[]);

    useEffect(()=>{
        arivalMessage && currChat?.members.includes(arivalMessage.sender) && setArrivalMessage((prev)=>[...prev,arivalMessage]);
    },[arivalMessage,currChat]);

    const handleClick=async ()=>{
        
        const receiverId=currChat.members.find(m=>m !== user.user._id);

         socket.current.emit("sendMessage",{
            senderId:user.user._id,
            receiverId,
            text:newMessage
         });

        try{
          const res=await axios.post("http://localhost:3001/api/Message",{
            text:newMessage,
            conversationId:currChat._id,
            sender:user.user._id
          });
          console.log(res.data);
          message.push(res.data);
          setNewMessage("");
        }catch(err){
            console.log(err)
        }
    }
    // console.log(newMessage);
    // console.log(message);
    useEffect(()=>{
        const getMessages=async ()=>{
            try{
              const res=await axios.get("http://localhost:3001/api/Message/"+currChat._id);
            //   console.log(res.data);
              setMessage(res.data);

            }catch(err){
                console.log(err)
            }
        }
        getMessages();
    },[currChat,message]);

    // useEffect(()=>{
    //     scrollRef.current?.scrollIntoView({behavior:"smooth"});
                
    // },[message])
  return (
    <div className="Center" >
        { currChat ?
        <>
        <div className="c-top">
            <div className="c-top-l">
                <img src={currChatUser.img} alt=""/>
                <div className="c-top-title">
                    <h3>{currChatUser.name} </h3>
                    <p>Last Seen 9:00 pm </p>
                </div>
            </div>
            <div className="c-top-r">
                 <Phone style={{marginRight:"10px"}} />
                 <VideoCall  style={{marginRight:"10px",color:"blueviolet"}}  />
                 <MoreHoriz style={{color:"gray",marginRight:"10px"}} />
            </div>
        </div>
        <div className="chatbox">
            <div className="chatbox-wrapper">
               {message.map((m)=>(
                   <div >
                      <Message message={m} currChatUser={currChatUser}  own={m.sender === user.user._id} /> 
                   </div>
                  
                ) )
                }
                
                
                
            </div>
        </div>
        <div className="c-bottom">
              <div className="inputContainer">
                  <Link />
                  <input type="text" value={newMessage} placeholder="type here" onChange={(e)=>setNewMessage(e.target.value)} />
                  <EmojiEmotions style={{color:"orange"}} />
                  <Mic  />
                  <Send style={{color:"blueviolet"}} onClick={handleClick} />
              </div>
        </div>
         </> 
         :
         <span className="default-message">Open the Chat to start chatting </span>
         }
    </div>
  )
}
