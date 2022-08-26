import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch,user)=>{
   
    dispatch(loginStart);
    try{
        const res=await axios.post("http://localhost:3001/api/Login",user);
        dispatch(loginSuccess(res.data));
        console.log(res.data);


    }catch(err){
       dispatch(loginFailure);
    }
   
}