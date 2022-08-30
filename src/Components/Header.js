import { BsLinkedin, BsGithub } from "react-icons/bs";
import logo from "../img/logo.png";
import styled, { keyframes } from "styled-components";
function Header() {
  const HeaderComponent = styled.header`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  `;
  const NavComponent = styled.nav`
    color: #ffff;
    list-style: none;
    display: flex;
    justify-content: space-between;
    height: 15%;
    margin-bottom: 1rem;
    width: 100%;
  `;

  const HeaderMain = styled.main`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const FlexItemLogo = styled.li`
    flex-grow: 2;
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
  `;
  const FlexlinkContainer = styled.div`
    flex-grow: 1;
    display: flex;
    width: 50%;
  `;
  const FlextItemLink = styled(FlexItemLogo)`
    justify-content: center;
    cursor: pointer;
  `;

  const Introduction1 = styled.div`
    background-color: #b1b1b9;
    color: #000;
    border-radius: 28px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  // TypeWriter  Effetct
  const typing = keyframes`
  from { width: 0 }
  to { width: 100% }`;

  const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: black; }
  `;
  const TypeWriter = styled.div`
    width: 85%;
    p {
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: 0.15em solid black; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: 0.09em; /* Adjust as needed */
      animation: ${typing} 3.5s steps(40, end),
        ${blinkCaret} 0.75s step-end infinite;
    }
  `;

  const Introduction2 = styled.div`
    text-align: center;
    margin-top: 20px;
  `;

  const ViewResume = styled.li`
    background-color: #2e8fff;
    border-radius: 28px;
    cursor: pointer;
    list-style: none;
    padding: 1rem;
    text-align: center;
    margin-top: 1rem;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  `;
  const iconStyle = {
    fontSize: "2rem",
  };
  return (
    <HeaderComponent>
      <NavComponent>
        <FlexItemLogo>
          <img style={{ width: "20%", height: "auto" }} src={logo} />
        </FlexItemLogo>
        <FlexlinkContainer>
          <FlextItemLink>
            <BsLinkedin style={iconStyle} />
          </FlextItemLink>
          <FlextItemLink>
            <BsGithub style={iconStyle} />
          </FlextItemLink>
        </FlexlinkContainer>
      </NavComponent>
      <HeaderMain>
        <Introduction1>
          <TypeWriter>
            <p>Hello ! Im an anspiring Web Developer</p>
          </TypeWriter>
        </Introduction1>
        <Introduction2>
          Web Developer 💻 || Trader 📈 || Musician 🎸
        </Introduction2>
        <ViewResume>
          <a
            style={{
              textAlign: "center",
              textDecoration: "none",
              color: "white",
            }}
            href="#"
          >
            View Resume
          </a>
        </ViewResume>
      </HeaderMain>
    </HeaderComponent>
  );
}

export default Header;
