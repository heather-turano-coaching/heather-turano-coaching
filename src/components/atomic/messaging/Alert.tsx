import { makeColor, makeInset, makeOutset, makeSize } from "@htc/design-system";
import { flexRow } from "@htc/theme";
import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import { Typography } from "../display";

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
  ${flexRow("flex-start", "center")};

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
