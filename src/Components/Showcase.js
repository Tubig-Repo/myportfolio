import styled from "styled-components";
import { useEffect } from "react";
import useProjects from "../customHooks/useProjects";
import project1 from "../img/Project1.png";
const ShowcaseContainer = styled.div`
  width: 100%;
`;
const ShowcaseLink = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 50%;
  > * {
    font-size: 1.2rem;
  }
`;

const WrapperStyle = {
  width: "50%",
  margin: "0 auto",
  height: "100%",
  padding: "2rem",
};

const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: row dense;
  gap: 1rem;
  margin-top: 2rem;
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  background-color: #c4c4c4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const LinkDecoration = {
  textDecoration: "none",
  color: "#ffff",
};

const ProjectImage = styled.img`
  transform: scale(1.5);
  transition: all 0.3s;
  :hover {
    transform: scale(1);
  }
`;
const Showcase = () => {
  const [projects, isLoading] = useProjects();

  const renderProjects = () => {
    console.log(projects);
    if (isLoading) return <p>loading ..</p>;

    return projects.map((project) => (
      <Project>
        <ProjectImage src={project.fields.showcase.fields.file.url} />
      </Project>
    ));
  };
  useEffect(() => {
    if (!projects) return;
    console.log(projects);
  }, [projects]);

  return (
    <ShowcaseContainer>
      <main style={WrapperStyle}>
        <ShowcaseLink>
          <li>
            <a style={LinkDecoration} href="#">
              Projects
            </a>
          </li>
          <li>
            <a style={LinkDecoration} href="#">
              Skills
            </a>
          </li>
          <li>
            <a style={LinkDecoration} href="#">
              Blog
            </a>
          </li>
        </ShowcaseLink>
        <ProjectContainer>{renderProjects()}</ProjectContainer>
      </main>
    </ShowcaseContainer>
  );
};

export default Showcase;
