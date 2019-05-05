import React from "react";
import styled, { css } from "styled-components/macro";

interface PictureProps extends React.HTMLProps<HTMLElement> {
  src: string;
  children?: React.ReactNode;
  title?: string;
}

const Picture: React.SFC<PictureProps> = ({
  src,
  title,
  children,
  ...props
}) => {
  return (
    // @ts-ignore
    <Polaroid title={title} {...props}>
      <Photo src={src} />
      {children}
    </Polaroid>
  );
};

const Polaroid = styled.div`
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6), inset 0 -5px 50px rgba(0, 0, 0, 0.4);
  text-align: center;
  text-decoration: none;
`;

const imgStyle = css`
  display: block;
  width: 100%;
  box-shadow: 2px 2px 2px 0 #e7e8e8 inset, -2px -2px 2px 0 #e7e8e8 inset;
`;

const Photo = styled.div<PictureProps>`
  padding-bottom: 129%;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  ${imgStyle};
`;

export default React.memo(Picture);
