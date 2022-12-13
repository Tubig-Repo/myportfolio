import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import useProjects from "../customHooks/useProjects";
import { BsX } from "react-icons/bs";
import Projects from "./routes/Projects";
import Skills from "./routes/Skills";
import Blog from "./routes/Blog";
// Showcase Container
// const ShowcaseContainer = styled.div`
//   width: 100%;
//   position: relative;
// `;
// const ShowcaseLinkContainer = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
//   width: 50%;
//   > * {
//     font-size: 1.2rem;
//   }
// `;

// const WrapperStyle = styled.main`
//   width: 50%;
//   margin: 0 auto;
//   height: 100%;
//   padding: 2rem;
// `;

// const ShowcaseLink = styled.li`
//   cursor: pointer;
//   color: #918c8c;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid #2e8fffb9;
//     `}
// `;

// // Start of Project -- Project Container
// const ProjectContainer = styled.div`
//   width: 100%;
//   display: grid;
//   // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-auto-rows: 200px;
//   grid-auto-flow: row dense;
//   gap: 5rem;
//   margin-top: 2rem;
// `;

// // Individual Project Styling
// const Project = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   border-radius: 15px;
//   background-color: #c4c4c4;
//   transition: all 0.3s;

//   :hover {
//     box-shadow: 0px 2px 10px 0px rgba(194, 191, 191, 0.623);
//   }
// `;

// const ProjectImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 15px;
//   transform: scale(1.5);
//   transition: all 0.3s;
//   :hover {
//     transform: scale(1);
//     cursor: pointer;
//   }
// `;

// // Modal Styling
// const ProjectModal = styled.div`
//   @keyframes fadein {
//     transform: translateY(-50%) translateX(-50%);
//     from {
//       transform: scale(0.5);
//       opacity: 0;
//       transform: translate(-50%, -50%);
//     }
//     to {
//       transform: scale(1);
//       opacity: 1;
//       transform: translate(-50%, -50%);
//     }
//   }
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 30%;
//   background-color: white;
//   border-radius: 5px;
//   box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
//   z-index: 10;
//   color: black;
//   display: flex;
//   flex-direction: column;
//   animation: fadein 0.5s;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   width: 100%; /* Full width (cover the whole page) */
//   height: 100%; /* Full height (cover the whole page) */
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgb(24 24 24 / 9%);
//   backdrop-filter: blur(2px);
//   z-index: 5;
// `;

// const ModalImage = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// const DescriptionContainer = styled.div`
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;
// const ModalButtons = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
// `;
// const ViewSiteBtn = styled.li`
//   list-style: none;
//   background: #202023;
//   padding: 1rem;
//   :hover {
//     background: #ffffff;
//   }
//   a {
//     color: white;
//     text-decoration: none;
//     cursor: pointer;
//   }

//   a:hover {
//     color: #202023;
//     text-decoration: underline;
//     transition: 0.5s;
//   }
// `;
const Showcase = () => {
  const [projects, isLoading] = useProjects();
  const [modalState, setModal] = useState(false);
  const [modalID, setModalID] = useState(null);
  const tabs = ["Project", "Skills", "Blog"];
  const [active, setActive] = useState(tabs[0].tabName);
  //Handling Modal
  const handleModal = (event) => {
    setModal(!modalState);
    setModalID(event.target.dataset.id);
  };

  useEffect(() => {
    console.log(tabs);
  }, [active]);

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
        <BrowserRouter>
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
        </BrowserRouter>
      </main>
    </div>
  );
};
export default Showcase;

/**
 *
 *
 */
