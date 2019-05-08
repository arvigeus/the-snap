import React from "react";
import styled, { css } from "styled-components/macro";

import { colors, fontSizes, fonts } from "../theme";

interface TextProps {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "initial"
    | "inherit";
  fontStyle?: "normal" | "italic" | "oblique" | "initial" | "inherit";
}

interface StyledTextProps extends TextProps, React.HTMLProps<HTMLSpanElement> {}

interface StyledParagraphProps
  extends TextProps,
    React.HTMLProps<HTMLParagraphElement> {}

const style = css<TextProps>`
  color: ${({ color }) => color || colors.black};
  font-family: ${({ fontFamily }) => fontFamily || fonts.interface};
  font-size: ${({ fontSize }) => fontSize || fontSizes.normal};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
`;

const Text = styled.span<StyledTextProps>`
  display: inline-block;
  ${style};
`;

export const Paragraph = styled.p<StyledParagraphProps>`
  ${style};
`;

export const HandwrittenText = styled(Text)<StyledTextProps>`
  font-family: ${fonts.handwriting};
  letter-spacing: 1px;
`;

export default Text;
