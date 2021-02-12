import React, { FC } from "react";
import styled, { css } from "styled-components";

import { makeDesktopStyles, makeMobileStyles, makeRem } from "../../theme";

export const StyledGroup = styled.div`
  ${({ theme }) => css`
    display: flex;

    ${makeMobileStyles(theme)} {
      text-align: center;
      & > * {
        flex: 1;

        &:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right: ${makeRem(1)} solid ${theme.palette.light.light};
        }

        &:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }

    ${makeDesktopStyles(theme)} {
      & > * {
        &:not(:last-child) {
          margin-right: ${makeRem(24)};
        }
      }
    }
  `}
`;

export const Group: FC = ({ children }) => (
  <StyledGroup>{children}</StyledGroup>
);
