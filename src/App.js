import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
        <Header/>
        <div className="App">
          <div className="left"> left</div>
          <div className="center">center</div>
          <div className="right">right</div>
        </div>
    </div>
   
  );
}

export default App;
