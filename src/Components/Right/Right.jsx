import NotificationCard from "../RightNotificationCard/NotificationCard"
import Suggetions from "../Suggestions/Suggetions"
import "./Right.css"

export default function Right() {
  return (
    <div className="Right">
        <div className="r-top">
             <h3>Notifications</h3>
             <div className="r-notification">
                 <NotificationCard />
                 <NotificationCard />
                 <NotificationCard />
                 <NotificationCard />
                 <NotificationCard />
                 <NotificationCard />

             </div>
        </div>
        <div className="r-bottom">
             <h3>Suggestions</h3>
             <div className="suggestion-container">
                  <Suggetions/>
                  <Suggetions/>
                  <Suggetions/>
                  <Suggetions/>
             </div>
        </div>
    </div>
  )
}
