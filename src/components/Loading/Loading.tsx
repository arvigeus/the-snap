import React from "react";
import styled from "styled-components/macro";

import logo from "./Marvel_The_Avengers_logo.svg";

const Loading: React.FC = () => (
  <Wrapper>
    <img style={{ width: "100%" }} src={logo} alt="Marvel's The Avengers" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Loading;
