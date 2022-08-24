import { Phone, VideoCall } from "@mui/icons-material";
import "./Center.css";

export default function Center() {
  return (
    <div className="Center" >
        <div className="c-top">
            <div className="c-top-l">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGdaSIXe9cqjw/profile-displayphoto-shrink_800_800/0/1619779363742?e=1666828800&v=beta&t=xOGUaD-oYYYtcscc15WrZjMokRwPkNazussxPXgpMdI" alt=""/>
                <div className="c-top-title">
                    <h3>Pankaj Pandey </h3>
                    <p>Last Seen 9:00 pm </p>
                </div>
            </div>
            <div className="c-top-r">
                 <Phone style={{marginRight:"10px"}} />
                 <VideoCall  style={{marginRight:"10px"}}  />
            </div>
        </div>
    </div>
  )
}
