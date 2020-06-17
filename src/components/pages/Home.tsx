import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
`;

const Home: React.FC = () => {
  return <Wrapper></Wrapper>;
};

export default Home;
