import "./App.css";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Showcase from "./Components/Showcase";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-w-[1000px] text-white mx-auto">
        <Header />
        <Introduction />
        <Showcase />
      </div>
    </Router>
  );
}

export default App;
