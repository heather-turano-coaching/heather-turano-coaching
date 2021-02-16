import { Title } from "@htc/components/atomic";
import { makeRem } from "@htc/theme";
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
        []
      )}
      <ul
        css={css`
          &:not(:last-child) {
            margin-bottom: ${makeRem(200)};
          }
          &:last-of-type {
            margin-bottom: ${makeRem(300)};
          }
        `}
      >
        {children}
      </ul>
    </>
  );
};
