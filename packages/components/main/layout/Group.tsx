import React, { FC } from "react";
import styled, { css } from "styled-components";

export const StyledGroup = styled.div`
  ${({ theme }) => css`
    display: flex;

    ${theme.breakpoints.mobileOnly} {
      text-align: center;
      & > * {
        flex: 1;

        &:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right: ${theme.size.makeRem(1)} solid
            ${theme.palette.light.light};
        }

        &:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }

    ${theme.breakpoints.laptop} {
      & > * {
        &:not(:last-child) {
          margin-right: ${theme.size.makeRem(24)};
        }
      }
    }
  `}
`;

export const Group: FC = ({ children }) => (
  <StyledGroup>{children}</StyledGroup>
);
