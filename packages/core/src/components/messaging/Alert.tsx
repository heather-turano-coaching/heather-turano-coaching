import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import {
  makeColor,
  makeInset,
  makeOutset,
  makeSize
} from "../../design-system";
import { Typography } from "../display";
import { makeFlex } from "../utils";

interface AlertProps {
  type: "success" | "error" | "warning";
}

const formNotificationStyleMap: {
  [key in AlertProps["type"]]: SimpleInterpolation;
} = {
  success: css`
    background: ${makeColor({ scalable: { color: "success" } })};
  `,
  warning: css`
    background: ${makeColor({ scalable: { color: "warning", scale: 2 } })};
  `,
  error: css`
    background: ${makeColor({ scalable: { color: "error" } })};
  `
};

const StyledAlert = styled.div<AlertProps>`
  box-sizing: border-box;
  ${makeInset({ horizontal: 20, vertical: 20 })};
  ${makeOutset({ vertical: 24 })};
  border-radius: ${makeSize({ custom: 4 })};
  ${makeFlex("row", "flex-start", "center")};

  & > * {
    &:first-child {
      ${makeOutset({ right: 20 })};
    }
  }

  ${({ type }) => formNotificationStyleMap[type]}
`;

export const Alert: FC<AlertProps> = ({ type, children }) => {
  return (
    <div>
      <StyledAlert type={type}>
        <Typography
          variant="text"
          fontSize="xs"
          fontColor={{ fixed: type !== "warning" ? "light" : "dark" }}
        >
          {children}
        </Typography>
      </StyledAlert>
    </div>
  );
};
