import "./Notification.css";

export default function NotificationCard() {
  return (
    <div className="NotificationCard">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGdaSIXe9cqjw/profile-displayphoto-shrink_800_800/0/1619779363742?e=1666828800&v=beta&t=xOGUaD-oYYYtcscc15WrZjMokRwPkNazussxPXgpMdI" alt="" />
        <div className="n-desc">
            <h5> <span>@pankaj </span> mentioned you</h5>
            <p>Trip to Goa <span>9 min ago</span></p>
        </div>
    </div>
  )
}
