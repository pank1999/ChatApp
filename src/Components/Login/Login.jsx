import "./Login.css"
import {Send} from "@mui/icons-material";
import bg from "../../img/chat-bg.jpg";
import { useEffect, useState } from "react";
import {useDispatch, useSelector } from 'react-redux'
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [formData,setFormData]=useState({});
  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const user=useSelector((state)=>(state.user.user));
  const handleChange=(e)=>{
     setFormData({
       ...formData ,
       [e.target.name]:e.target.value
     })
  }
  
  const handleClick=(e)=>{
     e.preventDefault();
     login(dispatch,formData);
  }
  useEffect(()=>{
    user && Navigate("/");
  },[user])

  return (
    <div className="Login">
        <div className="Top">
            <h1>Chat APP</h1>
            <Send style={{fontSize:"50px"}} />
        </div>
        <div className="Wrapper">
           <div className="left">
                <div className="left-bg"></div>
                <div className="left-img-container" style={{background:`url(${bg})`}}>
                </div>
           </div>
           <div className="right">
               <div className="right-container">
                     <div className="right-top">
                        <h2>Login</h2><h3>Register</h3>
                     </div>
                     <form className="form-container">
                        <input type="email" onChange={handleChange} name="email" placeholder="Email id"/>
                        <input type="password" onChange={handleChange} name="password" placeholder="Password" />
                        <button className="button"  onClick={handleClick} >Login</button>
                        <p className="or">or</p>
                        <p className="bottom-text">Don't have an account ? <span>Register</span></p>
                     </form>
                   
               </div>
           </div>
        </div>
       

    </div>
  )
}
