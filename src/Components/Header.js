import { BsLinkedin, BsGithub } from "react-icons/bs";
import styled, { keyframes } from "styled-components";
import logo from "./img/logo.png";
import useIntroduction from "../customHooks/useIntroduction";
import { Oval } from "react-loader-spinner";
import { useEffect } from "react";

function Header() {
  const [data, isLoading] = useIntroduction();

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Oval
          height={80}
          width={80}
          color="#2A71C3"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#fff"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  return (
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
