import styled from "styled-components";

// Project Elements
const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: row dense;
  gap: 5rem;
  margin-top: 2rem;
`;

// Project Details
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
// Project Image
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
const Projects = ({ projects, isLoading, handleModal }) => {
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

  return <ProjectContainer>{renderProjects()}</ProjectContainer>;
};

export default Projects;
