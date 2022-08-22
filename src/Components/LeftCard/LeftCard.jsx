import "./LeftCard.css";

export default function LeftCard() {
  return (
    <div className="LeftCard">
        <div>
            <img className="profile-img" src="https://media-exp1.licdn.com/dms/image/C4D03AQGdaSIXe9cqjw/profile-displayphoto-shrink_800_800/0/1619779363742?e=1666828800&v=beta&t=xOGUaD-oYYYtcscc15WrZjMokRwPkNazussxPXgpMdI" alt="" />
        </div>
        <div>
            <h4>pankaj pandey</h4>
            <p>software developer</p>
        </div>
        <div className="cardTime">
            <span className="time">2:30 pm</span>
            <span className="numberOfMessage">3</span>
        </div>
    </div>
  )
}
