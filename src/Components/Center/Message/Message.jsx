import "./Message.css";
import { format } from "timeago.js";

export default function Message({ own, message, currChatUser }) {
  return (
    <div style={{ marginLeft: own ? "60%" : "50px" }}>
      <div style={{"display":"flex","alignItems":"center","justifyContent":"flex-start"}} >
        {own ? (
          ""
        ) : (
          <img
            src={currChatUser.img}
            alt="img"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
        )}
        <div
          className="Message"
          style={{
            borderRadius: own ? "20px 0px 20px 20px" : "20px",
            backgroundColor: own ? "rgb(146, 97, 192)" : "rgb(240, 240, 240)",
          }}
        >
          <p>{message.text}</p>
        </div>
      </div>
      <span style={{ marginLeft: own ? "50px" : "0px" }}>
        {format(message.createdAt)}
      </span>
    </div>
  );
}
