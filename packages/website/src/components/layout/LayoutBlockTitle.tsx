import {
  Typography,
  makeColor,
  makeFont,
  makeOutset,
  makeSize
} from "@htc/components";
import React, { FC } from "react";
import styled from "styled-components";

interface LayoutBlockTitleProps {
  title: string;
}

const StyledLayoutBlockTitle = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${makeOutset({ bottom: 16 })};

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: ${makeSize({ custom: 1 })};
    background: ${makeColor({
      scalable: { color: "gray", scale: 3 }
    })};
  }

  h5 {
    text-transform: uppercase;
    ${makeFont({
      fontSize: "sm",
      fontWeight: "bold",
      lineHeight: "lg",
      fontColor: { fixed: "dark" }
    })}
  }
`;

export const LayoutBlockTitle: FC<LayoutBlockTitleProps> = ({
  title,
  children
}) => (
  <StyledLayoutBlockTitle>
    <Typography variant="h5" color="dark">
      {title}
    </Typography>
    {children}
  </StyledLayoutBlockTitle>
);
