import { BsLinkedin, BsGithub } from "react-icons/bs";
import styled, { keyframes } from "styled-components";
import logo from "./logo.png";
import useIntroduction from "../customHooks/useIntroduction";
import { useEffect } from "react";
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

  :hover {
    background-color: #2e8fffb9;
    text-shadow: 2px 2px 4px #000000;
  }
`;
function Header() {
  const [data, isLoading] = useIntroduction();

  const iconStyle = {
    fontSize: "2rem",
  };

  if (isLoading) return <p>Loading ...</p>;
  return (
    //  <Header className="max-h-full flex flex-col p-8">
    <header className="max-h-full flex flex-col p-8">
      <nav className="#fffff list-none flex justify-between mb-4 w-full">
        <li className="flex grow-[2] items-center w-full h-auto">
          <img className="w-3/12 h-auto" src={logo} />
        </li>
        <div className="grow flex w-1/2">
          <li className="FlexItemLink justify-center cursor-pointer">
            <a
              href={data.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-[2rem]" />
            </a>
          </li>
          <li className="FlexItemLink justify-center cursor-pointer">
            <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-[2rem]" />
            </a>
          </li>
        </div>
      </nav>
      <main className="w-3/5 h-full my-0 mx-auto p-16 flex flex-col gap-5">
        <div className="bg-[#b1b1b9] text-black rounded-[28px] p-4 flex justify-center items-center">
          <div className="w-4/5">
            <p className="animate-typing overflow-hidden border-r border-black whitespace-nowrap m-0-auto tracking-wider">
              {data.introductionMain}
            </p>
          </div>
        </div>
        <div className="text-center mt-[20px]">{data.occupations}</div>
        <li className="bg-[#2e8fff] rounded-[28px] cursor-pointer list-none p-4 text-center mt-[1rem] w-1/2 mx-auto hover:bg-[#2e8fffb9] [text-shadow:2px_2px_4px_#00000] ">
          <a
            className="text-center no-underline	text-white"
            href={data.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </li>
      </main>
    </header>
  );
}

export default Header;
