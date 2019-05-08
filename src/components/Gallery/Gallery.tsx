import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components/macro";

import Picture from "components/Picture";
import { HandwrittenText } from "components/Text";
import Endgame from "components/Endgame";
import desintegrate from "lib/desintegrate";
import { fontSizes } from "../../theme";
import cursor from "./cursor.png";

interface GalleryProps {
  data: Array<Person>;
}

const speakLineNode = document.getElementById("speak-line");

const Gallery: React.SFC<GalleryProps> = ({ data }) => {
  const [snappedMap, setSnapped] = useState<object>({});
  const [remaining, setRemaining] = useState<number>(18);

  return (
    <>
      <Heading>
        Unleash your inner Thanos!
        <br />
        Snap all the people who disappeared during the decimation.
        <br />
        There is only one possible future where the «Avengers» can win!
      </Heading>
      <Wrapper>
        {data.map(({ alias, name, actor, image, rotation, line, snapped }) => {
          const isSnapped = snappedMap.hasOwnProperty(name);

          return (
            <React.Fragment key={actor}>
              <Item angle={rotation}>
                <Picture
                  title={actor}
                  src={image}
                  onClick={e => {
                    if (isSnapped || remaining <= 0) return;
                    setSnapped({ ...snappedMap, [name]: snapped });
                    setRemaining(remaining - 1);
                    desintegrate(e.currentTarget);
                  }}
                >
                  <HandwrittenText
                    fontSize={fontSizes.large}
                    fontWeight="bold"
                    fontStyle="italic"
                  >
                    {alias ? (
                      <>
                        {alias}
                        <br />({name})
                      </>
                    ) : (
                      name
                    )}
                  </HandwrittenText>
                </Picture>
              </Item>
              {isSnapped
                ? ReactDOM.createPortal(
                    <SpeakLine>{line}</SpeakLine>,
                    // @ts-ignore
                    speakLineNode
                  )
                : null}
            </React.Fragment>
          );
        })}
      </Wrapper>
      <Counter>{`${18 - remaining} / 18`}</Counter>
      {remaining === 0 ? <Endgame snapped={snappedMap} /> : null}
    </>
  );
};

const Heading = styled.h1`
  margin-bottom: 40px;
  color: #eee;
  font-size: 2.5vw;
  font-weight: bold;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-flow: row wrap;
  align-items: top;
  justify-content: center;
`;

const Item = styled.div`
  width: 380px;
  box-sizing: border-box;
  padding: 20px;
  cursor: url('${cursor}'), auto;
  transform: ${({ angle }: { angle: number }) => `rotate(${angle}deg)`};
`;

const speackLineAnimation = keyframes`
  0%   {
    opacity: 0;
    transform: scale(0.85);
  }
  15%  {
    transform: scale(1);
  }
  25%  {
    opacity: 1;
  }
  50%  {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.97);
  }
`;

const SpeakLine = styled.div`
  position: fixed;
  z-index: 200;
  top: 5%;
  padding: 20px;
  animation: ${speackLineAnimation} 2s linear;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: #dc143c;
  font-size: 4vw;
  font-weight: 900;
  opacity: 0;
  pointer-events: none;
  text-align: center;
  text-shadow: -1px -1px 1px #dc143c, 1px -1px 1px #dc143c, -1px 1px 1px #dc143c,
    1px 1px 1px #dc143c;
`;

const Counter = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  color: #eee;
  font-size: 16px;
  pointer-events: none;
`;

export default Gallery;
