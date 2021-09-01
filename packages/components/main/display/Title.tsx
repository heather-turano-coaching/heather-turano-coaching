import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import { makeColor, makeFont, makeReset } from "../design-system";
import { makeRem } from "../theme";

type TitleProps = {
  size: "lg" | "md" | "sm";
  copy?: string;
};

const styledTitleStyleMap: {
  [key in TitleProps["size"]]: SimpleInterpolation;
} = {
  lg: css`
    margin-bottom: ${makeRem(60)};
    padding: 0 2rem 1.5rem 2rem;
    &::after {
      background-color: ${makeColor({
        scalable: { color: "primary" }
      })};
    }
  `,
  md: css`
    margin-bottom: ${makeRem(24)};
    padding: 0 ${makeRem(16)} ${makeRem(24)} ${makeRem(16)};
    &::after {
      width: 14%;
      margin-left: -7%;
      background-color: ${makeColor({
        scalable: { color: "primary" }
      })};
    }
  `,
  sm: css`
    margin-bottom: ${makeRem(16)};
    padding: 0 ${makeRem(8)} ${makeRem(16)} ${makeRem(8)};
    &::after {
      width: 10%;
      margin-left: -5%;
      background-color: ${makeColor({
        scalable: { color: "secondary" }
      })};
    }
  `
};

const BaseTitle = css`
  ${makeReset("heading")};
  text-transform: uppercase;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 100%;
    width: 20%;
    left: 50%;
    margin-left: -10%;
    height: 1px;
  }
`;

const StyledTitleLg = styled.h3`
  ${BaseTitle};
  ${makeFont({
    fontSize: "h3",
    fontFamily: "Montserrat",
    fontWeight: "semi-bold",
    fontColor: {
      scalable: {
        color: "primary"
      }
    }
  })};
  ${styledTitleStyleMap.lg}
`;
const StyledTitleMd = styled.h4`
  ${BaseTitle};
  ${styledTitleStyleMap.md}
  ${makeFont({
    fontSize: "h4",
    fontFamily: "Montserrat",
    fontWeight: "semi-bold",
    fontColor: {
      scalable: {
        color: "primary"
      }
    }
  })};
`;
const StyledTitleSm = styled.h5`
  ${BaseTitle};
  ${styledTitleStyleMap.sm}
  ${makeFont({
    fontSize: "h5",
    fontFamily: "Montserrat",
    fontColor: {
      scalable: {
        color: "secondary"
      }
    }
  })};
`;

export const Title: FC<TitleProps> = ({ size, copy, children }) => {
  switch (size) {
    case "sm":
      return <StyledTitleSm>{copy || children}</StyledTitleSm>;
    case "md":
      return <StyledTitleMd>{copy || children}</StyledTitleMd>;
    case "lg":
    default:
      return <StyledTitleLg>{copy || children}</StyledTitleLg>;
  }
};
