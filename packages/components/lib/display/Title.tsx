import React, { FC } from "react";
import styled, { css } from "styled-components";

import { makeColor, makeFont, makeReset } from "../design-system";

type TitleProps = {
  size: "lg" | "md" | "sm";
  copy?: string;
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
  ${({ theme }) => css`
    margin-bottom: ${theme.size.makeRem(60)};
  `}
  padding: 0 2rem 1.5rem 2rem;
  &::after {
    background-color: ${makeColor({
      scalable: { color: "primary" }
    })};
  }
`;
const StyledTitleMd = styled.h4`
  ${BaseTitle};
  ${({ theme }) => css`
    margin-bottom: ${theme.size.makeRem(24)};
    padding: 0 ${theme.size.makeRem(16)} ${theme.size.makeRem(24)}
      ${theme.size.makeRem(16)};
  `}

  &::after {
    width: 14%;
    margin-left: -7%;
    background-color: ${makeColor({
      scalable: { color: "primary" }
    })};
  }
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
  ${({ theme }) => css`
    margin-bottom: ${theme.size.makeRem(16)};
    padding: 0 ${theme.size.makeRem(8)} ${theme.size.makeRem(16)}
      ${theme.size.makeRem(8)};
  `}

  &::after {
    width: 10%;
    margin-left: -5%;
    background-color: ${makeColor({
      scalable: { color: "secondary" }
    })};
  }
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
