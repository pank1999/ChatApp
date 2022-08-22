import "./App.css";
import Header from "./Components/Header/Header";
import LeftTop from "./Components/LeftTop/LeftTop";
import {AddCircle, Search} from "@mui/icons-material";
import LeftCard from "./Components/LeftCard/LeftCard";

function App() {
  return (
    <div>
        <Header/>
        <div className="App">
          <div className="left">
               <LeftTop /> 
               <div className="leftTitle">
                   <h2>Chats</h2>
                  <AddCircle style={{color:"rgb(135, 16, 214)"}} />
               </div>
               <div className="LeftMenu">
                   <p style={{color:"black"}} >Direct <span className="leftNotificationSpan">2</span></p>
                   <p>Group</p>
                   <p>People</p>
               </div>
               <div className="search">
                   <Search style={{fontSize:"14px",paddingLeft:"10px"}} />
                  <input type="text" placeholder="search"  />
               </div>
               <div className="LeftCardContainer">
                  <LeftCard />
                  <LeftCard />
                  <LeftCard />
                  <LeftCard />
                  <LeftCard />
                  <LeftCard />
                  {/* <LeftCard />
                  <LeftCard />
                  <LeftCard /> */}
               </div>
          </div>
          <div className="center">center</div>
          <div className="right">right</div>
        </div>
    </div>
   
  );
}

export default App;
