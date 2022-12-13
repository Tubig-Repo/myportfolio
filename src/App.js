import "./App.css";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Showcase from "./Components/Showcase";
import styled from "styled-components";
// Stylings
const AppContainer = styled.div`
  max-width: 1000px;
  color: #ffff;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="max-w-[1000px] text-white mx-auto">
      <Header />
      <Introduction />
      <Showcase />
    </div>
  );
}

export default App;
