import styled from "styled-components";

const SkillsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillsItem = styled.li`
  list-style-type: none;
  padding: 3em;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #b1b1b9;

  :hover {
    transform: scale(1.2);
    background-color: #202023;
    transition: 0.5s;
  }
`;
export default function Skills() {
  return (
    <SkillsContainer>
      <SkillsItem>HTML</SkillsItem>
      <SkillsItem>CSS</SkillsItem>
      <SkillsItem>Javascript</SkillsItem>
      <SkillsItem>React</SkillsItem>
      <SkillsItem>GIT</SkillsItem>
      <SkillsItem>Figma</SkillsItem>
    </SkillsContainer>
  );
}
