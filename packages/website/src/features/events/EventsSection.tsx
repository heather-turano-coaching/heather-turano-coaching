import { Title } from "@htc/components";
import React, { FC, useMemo } from "react";
import styled, { css } from "styled-components";

export const StyledUl = styled.ul;

export const EventsSection: FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      {useMemo(
        () => (
          <Title size="lg">{title}</Title>
        ),
        [title]
      )}
      <ul
        css={css`
          ${({ theme }) => css`
            &:not(:last-child) {
              margin-bottom: ${theme.size.makeRem(200)};
            }
            &:last-of-type {
              margin-bottom: ${theme.size.makeRem(300)};
            }
          `}
        `}
      >
        {children}
      </ul>
    </>
  );
};
