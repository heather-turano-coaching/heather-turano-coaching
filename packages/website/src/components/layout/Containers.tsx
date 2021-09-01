import { Container } from "@htc/components";
import React, { FC } from "react";
import { css } from "styled-components";

export const BlockVertSpacing = 100;
export const ProgramVertSpacing = 60;

export const BlockContainer: FC = ({ children }) => (
  <Container
    css={css`
      padding-top: ${({ theme }) => theme.size.makeRem(BlockVertSpacing)};
      padding-bottom: ${({ theme }) => theme.size.makeRem(BlockVertSpacing)};
    `}
  >
    {children}
  </Container>
);

export const ProgramContainer: FC = ({ children }) => (
  <Container
    css={css`
      &:not(:last-child) {
        padding-bottom: ${({ theme }) =>
          theme.size.makeRem(ProgramVertSpacing)};
      }
    `}
  >
    {children}
  </Container>
);
