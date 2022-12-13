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
    // Skills Container
    <div className="mt-[2rem] w-[100%] grid  grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-[1rem]">
      {/* Skills Item's */}
      <li className="skills-item">HTML</li>
      <li className="skills-item">CSS</li>
      <li className="skills-item">Tailwind</li>
      <li className="skills-item">Javascript</li>
      <li className="skills-item">React</li>
      <li className="skills-item">GIT</li>
      <li className="skills-item">Figma</li>
    </div>
  );
}
