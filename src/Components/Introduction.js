import styled from "styled-components";
import React from "react";

import useIntroduction from "../customHooks/useIntroduction";
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
const Introduction = () => {
  const [data, isLoading] = useIntroduction();
  const WrapperStyle = {
    width: "50%",
    margin: "0 auto",
  };

  if (isLoading) return <p>Loading ....</p>;
  return (
    <Aboutme>
      <main style={WrapperStyle}>
        <h3>About me</h3>
        <p
          style={{
            padding: "1em",
            letterSpacing: "0.5px",
            textAlign: "justify",
            textIndent: "2em",
            lineHeight: "1.5",
          }}
        >
          {data.aboutMe}
        </p>
      </main>
    </Aboutme>
  );
};

export default Introduction;
