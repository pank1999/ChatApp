import "./LeftTop.css";
import {LocalPhone,ModeComment,Groups,Settings,AccountCircle} from "@mui/icons-material";


export default function LeftTop({loggedUser,setUserProfile,UserProfile}) {
  return (
    <div className="leftTop">
        <div className="leftTopIcons">
          <ModeComment style={{color:"rgb(135, 16, 214)"}}/>
          <span>2</span>
        </div>
        <div className="leftTopIcons">
             <LocalPhone />    
        </div>
        <div className="leftTopIcons">
            <Groups />
        </div>
        <div className="leftTopIcons">
           <Settings />
        </div>
        <div className="leftTopIcons" onClick={()=>{setUserProfile(true)}}>
             <img src={loggedUser.user.img} alt="img" />
        </div>
        
    </div>
  )
}
