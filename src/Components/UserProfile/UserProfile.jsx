import { Close, Upload } from "@mui/icons-material";
import "./UserProfile.css";

export default function UserProfile({ user ,setUserProfile}) {
  return (
    <div className="UserProfile">
      <Close style={{ position: "absolute", right: "10px","cursor":"pointer" }} onClick={()=>{setUserProfile(false)}} />
      <div className="img-container"  >
             <img src={user.user.img} alt="" />
             <div style={{"marginLeft":"50px"}} >
                <input type="file"  style={{"paddingLeft":"0"}}  />
                {/* <Upload style={{"cursor":"pointer","position":"absolute","right":"0"}} /> */}
             </div>
      </div>
     
      <div className="inp-container" >
        <label>Name</label>
        <input type="text" placeholder={user.user.name} />
      </div>
      <div className="inp-container" >
        <label>Mobile Number</label>
        <input type="number" placeholder="863021XXXX" />
      </div>
      <div className="inp-container" >
        <label>D.O.B</label>
        <input type="date" />
      </div>

      <button>Update</button>
    </div>
  );
}
