import { makeRem } from "@htc-website/components";
import styled, { css } from "styled-components";

export const LinkCardLayout = styled.div<{ orientation: "row" | "column" }>`
  ${({ orientation }) =>
    orientation === "row" &&
    css`
      display: flex;
      & > * + * {
        margin-left: ${makeRem(16)};
      }
    `}
`;
