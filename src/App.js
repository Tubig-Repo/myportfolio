import "./App.css";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Showcase from "./Components/Showcase";
import styled from "styled-components";
function App() {
  // Stylings
  const AppContainer = styled.div`
    max-width: 1000px;
    color: #ffff;
    margin: 0 auto;
  `;
  return (
    <AppContainer>
      <Header />
      <Introduction />
      <Showcase />
    </AppContainer>
  );
}

export default App;
