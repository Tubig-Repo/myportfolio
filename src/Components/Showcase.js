import styled from "styled-components";
import { useEffect, useState } from "react";
import useProjects from "../customHooks/useProjects";
import { BsX } from "react-icons/bs";
import React from "react";

// Showcase Container
const ShowcaseContainer = styled.div`
  width: 100%;
  position: relative;
`;
const ShowcaseLinkContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 50%;
  > * {
    font-size: 1.2rem;
  }
`;

const WrapperStyle = styled.main`
  width: 50%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem;
`;

const ShowcaseLink = styled.li`
  cursor: pointer;
  color: #918c8c;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #FFFF;
    color: #ffff;`}
`;

// Start of Project -- Project Container
const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: row dense;
  gap: 5rem;
  margin-top: 2rem;
`;

// Individual Project Styling
const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  background-color: #c4c4c4;
  transition: all 0.3s;

  :hover {
    box-shadow: 0px 2px 10px 0px rgba(194, 191, 191, 0.623);
  }
`;

const LinkDecoration = styled.a``;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transform: scale(1.5);
  transition: all 0.3s;
  :hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

// Modal Styling
const ProjectModal = styled.div`
  @keyframes fadein {
    transform: translateY(-50%) translateX(-50%);
    from {
      transform: scale(0.5);
      opacity: 0;
      transform: translate(-50%, -50%);
    }
    to {
      transform: scale(1);
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
  color: black;
  display: flex;
  flex-direction: column;
  animation: fadein 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(24 24 24 / 9%);
  backdrop-filter: blur(2px);
  z-index: 5;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DescriptionContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ViewSiteBtn = styled.li`
  list-style: none;
  background: #202023;
  padding: 1rem;
  :hover {
    background: #ffffff;
  }
  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: #202023;
    text-decoration: underline;
    transition: 0.5s;
  }
`;
const Showcase = () => {
  const [projects, isLoading] = useProjects();
  const [modalState, setModal] = useState(false);
  const [modalID, setModalID] = useState(null);
  const tabs = ["Project", "Skills", "Blog"];
  const [active, setActive] = useState(tabs[0]);
  //Handling Modal
  const handleModal = (event) => {
    setModal(!modalState);
    setModalID(event.target.dataset.id);
  };
  //Rendering Project Modal Details
  const RenderProjectDetails = ({ id }) => {
    const data = projects.find((res) => res.sys.id == id);
    console.log(data);
    return (
      <ProjectModal animate={modalState}>
        {/* Image Container */}
        <div style={{ margin: "0", padding: "0" }}>
          <ModalImage src={data.fields.showcase.fields.file.url} />
        </div>
        {/* Description Container */}
        <DescriptionContainer>
          {/* Project Name */}
          <h2 style={{ textTransform: "uppercase" }}>
            {data.fields.projectName}
          </h2>
          {/* Project Tag */}
          <h3
            style={{
              textTransform: "uppercase",
              color: "#9c9c9c",
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              paddingBottom: "15px",
            }}
          >
            {data.fields.projectTag}
          </h3>
          {/* Project Description */}
          <p>{data.fields.projectDescription}</p>
          <ModalButtons>
            <ViewSiteBtn>
              <a
                href={data.fields.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site
              </a>
            </ViewSiteBtn>
            <BsX
              style={{
                alignSelf: "flex-end",
                fontSize: "2rem",
                cursor: "isHovering" ? "pointer" : "",
              }}
              onClick={handleModal}
            />
          </ModalButtons>
        </DescriptionContainer>
      </ProjectModal>
    );
  };

  // Rendering Projects from the contentful API
  const renderProjects = () => {
    if (isLoading) return <p>loading ..</p>;
    return projects.map((project) => (
      <Project onClick={handleModal}>
        <ProjectImage
          src={project.fields.showcase.fields.file.url}
          data-id={project.sys.id}
        />
      </Project>
    ));
  };

  // Handling
  const handleShowcaseSection = (event) => {};

  return (
    <ShowcaseContainer>
      <WrapperStyle>
        <ShowcaseLinkContainer>
          {/* <ShowcaseLink onClick={handleShowcaseSection}>
            <LinkDecoration href="#">Projects</LinkDecoration>
          </ShowcaseLink>
          <ShowcaseLink onClick={handleShowcaseSection}>
            <LinkDecoration href="#">Skills</LinkDecoration>
          </ShowcaseLink>
          <ShowcaseLink onClick={handleShowcaseSection}>
            <LinkDecoration href="#">Blog</LinkDecoration>
          </ShowcaseLink> */}
          {tabs.map((el) => (
            <ShowcaseLink active={active === el} onClick={() => setActive(el)}>
              {el}
            </ShowcaseLink>
          ))}
        </ShowcaseLinkContainer>
        <ProjectContainer>{renderProjects()}</ProjectContainer>
        {modalState && <RenderProjectDetails id={modalID} />}
        {modalState && <Overlay onClick={handleModal} />}
      </WrapperStyle>
    </ShowcaseContainer>
  );
};

export default Showcase;
