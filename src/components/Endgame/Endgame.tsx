import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import avengers from "./avengers.jpg";
import thanos from "./thanos.jpg";

interface EndgameProps {
  snapped: object;
}

const Endgame: React.FC<EndgameProps> = ({ snapped }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const guessed = Object.entries(snapped).reduce(
    (ac: number, av) => ac + (av[1] ? 1 : 0),
    0
  );

  const won = guessed === 18;

  const title = won
    ? "Whatever it takes!"
    : "Perfectly balanced, as all things should be";

  const message = won
    ? "This is the one single alternate reality that Doctor Strange saw the Avengers winning. Congratulations!"
    : "This is one of the 14,000,604 alternate realities where the Avengers lost the war. Thanos won.";

  const src = won ? avengers : thanos;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Result>
        {message}
        {!won ? <Small>{`${guessed}/18 correct`}</Small> : null}
      </Result>
      <img
        src={src}
        alt="Endgame"
        style={{ maxWidth: "80%", maxHeight: "680px" }}
      />
    </Wrapper>
  );
};

const appearAnimation = keyframes`
  0% { opacity: 0; }
  75% { opacity: 0; }
  100% { opacity: 1; }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation: ${appearAnimation} 2s linear;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  margin: 20px 0 60px 0;
  font-size: 4vw;
  font-weight: bold;
`;

const Result = styled.p`
  padding: 0 20px;
  margin-bottom: 40px;
  font-size: calc(12px + 1.2vw);
`;

const Small = styled.small`
  display: block;
  font-size: 18px;
  font-style: italic;
`;

export default Endgame;
