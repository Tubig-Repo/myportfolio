import React, { useState } from "react";
import {
  Link,
  Routes,
  Route,
  useLocation,
  HashRouter as Router,
} from "react-router-dom";
import useProjects from "../customHooks/useProjects";
import { BsX } from "react-icons/bs";
import Projects from "./routes/Projects";
import Skills from "./routes/Skills";
import Blog from "./routes/Blog";

const Showcase = () => {
  const [projects, isLoading] = useProjects();
  const [modalState, setModal] = useState(false);
  const [modalID, setModalID] = useState(null);
  const tabs = ["Project", "Skills", "Blog"];
  const [active, setActive] = useState(tabs[0].tabName);
  const currentTab = useLocation();
  const stringCurrentTab = currentTab.pathname.replace("/", "");
  //Handling Modal
  const handleModal = (event) => {
    setModal(!modalState);
    setModalID(event.target.dataset.id);
  };

  //Rendering Project Modal Details
  const RenderProjectDetails = ({ id }) => {
    // 1. Searching for requested Project Details from the User
    const data = projects.find((res) => res.sys.id == id);
    return (
      // Generating the Modal Window
      <div className="animate-fadein fixed top-[50%] left-[50%] translate-y-[-50%]	translate-x-[-50%] w-[40%] bg-white rounded-[5px] shadow-[0 3rem 5rem rgba(0, 0, 0, 0.3)] z-10 flex flex-col text-black">
        {/* Image Container */}
        <div className="m-[0px] p-[0px]">
          <img
            className="w-[100%] h-[100%]"
            src={data.fields.showcase.fields.file.url}
          />
        </div>
        {/* Description Container */}
        <div className=" p-[2rem] flex flex-col justify-between gap-[1rem]">
          {/* Project Name */}
          <h2 className="uppercase">{data.fields.projectName}</h2>
          {/* Project Tag */}
          <h3 className="uppercase text-[#9c9c9c] border-b-[2px] pb-[15px]">
            {data.fields.projectTag}
          </h3>
          {/* Project Description */}
          <p>{data.fields.projectDescription}</p>
          <div className="w-[100%] flex justify-between">
            <li className="list-none bg-[#202023] p-[1rem] hover:bg-[#fff] duration-[0.3s]">
              <a
                href={data.fields.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white decoration-none cursor-pointer hover:text-[#202023] decoration-none duration-[0.5s]"
              >
                View Site
              </a>
            </li>
            <BsX
              className={`self-end text-[2rem] cursor-${
                "isHovering" ? "pointer" : ""
              }`}
              onClick={handleModal}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[100%] relative">
      <main className="w-[50%] m-auto h-[100%] p-[2rem]">
        <ul className="list-none flex justify-between w-[50%] [>*]:text-[2rem]">
          {tabs.map((el) => (
            <li
              key={el}
              active={active === el}
              onClick={() => setActive(el)}
              className={`cursor-pointer text-[#918c8c] ${
                active === el
                  ? "border-b-[2px] border-solid border-b-[#2e8fffb9]"
                  : ""
              }`}
            >
              <Link
                className="no-underline text-white"
                to={`/${el == "Project" ? "" : el}`}
              >
                {el}
              </Link>
            </li>
          ))}
        </ul>
        <Routes>
          <Route
            path="/"
            element={
              <Projects
                projects={projects}
                isLoading={isLoading}
                modalState={modalState}
                handleModal={handleModal}
              />
            }
          />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        {modalState && <RenderProjectDetails id={modalID} />}
        {modalState && (
          <div
            className="fixed w-[100%] h-[100%] inset-0 bg-[#181818] bg-opacity-[9%] backdrop-blur-[2px] z-[5]"
            onClick={handleModal}
          />
        )}
      </main>
    </div>
  );
};
export default Showcase;

/**
 *
 *
 */
