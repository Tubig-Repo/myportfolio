import styled from "styled-components";

const Showcase = () => {
  const Showcase = styled.div`
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: row dense;
    gap: 1rem;
    margin-top: 2rem;
  `;

  const Project = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background-color: #c4c4c4;
  `;

  const LinkDecoration = {
    textDecoration: "none",
    color: "#ffff",
  };
  return (
    <Showcase>
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
        <ProjectContainer>
          <Project>1</Project>
          <Project>2</Project>
          <Project>3</Project>
          <Project>4</Project>
          <Project>1</Project>
          <Project>2</Project>
          <Project>3</Project>
          <Project>4</Project>
          <Project>1</Project>
          <Project>2</Project>
          <Project>3</Project>
          <Project>4</Project>
          <Project>1</Project>
          <Project>2</Project>
          <Project>3</Project>
          <Project>4</Project>
        </ProjectContainer>
      </main>
    </Showcase>
  );
};

export default Showcase;
