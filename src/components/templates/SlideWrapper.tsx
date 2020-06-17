import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const SlideWrapper: React.FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default SlideWrapper;
