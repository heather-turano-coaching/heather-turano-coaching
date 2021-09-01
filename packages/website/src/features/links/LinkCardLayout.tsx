import styled, { css } from "styled-components";

export const LinkCardLayout = styled.div<{ orientation: "row" | "column" }>`
  ${({ orientation, theme }) =>
    orientation === "row" &&
    css`
      display: flex;
      & > * + * {
        margin-left: ${theme.size.makeRem(16)};
      }
    `}
`;
