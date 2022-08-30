import styled from "styled-components";

const Aboutme = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperStyle = {
  width: "50%",
  margin: "0 auto",
};
const Introduction = () => {
  return (
    <Aboutme>
      <main style={WrapperStyle}>
        <h3>About me</h3>
        <p style={{ padding: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id
        </p>
      </main>
    </Aboutme>
  );
};

export default Introduction;
