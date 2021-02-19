import { Layout } from "@htc/design-system";
import { makeDesktopStyles, makeMobileStyles, makeRem } from "@htc/theme";
import React, { FC } from "react";
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css
} from "styled-components";

import { StyledButton } from "./Button";

interface ButtonGroupProps {
  layout?: Layout;
  align?: "left" | "center" | "right";
}

const buttonGroupStyleMap: {
  [key in Layout]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  inline: css`
    display: flex;
    flex-direction: row;
    align-items: center;

    ${({ theme }) => css`
      ${makeMobileStyles(theme)} {
        display: block;

        button,
        a {
          text-align: center;
          &:not(:first-child) {
            margin-top: ${makeRem(16)};
          }
        }
      }

      ${makeDesktopStyles(theme)} {
        & > ${StyledButton} + ${StyledButton}, & > a + a {
          margin-left: 1rem;
        }
      }
    `}
  `,
  "stacked-full": css`
    ${StyledButton}, a {
      display: block;
      width: 100%;
    }

    & > ${StyledButton} + ${StyledButton}, & > a + a {
      margin-top: 1rem;
    }
  `,
  stacked: css`
    ${StyledButton} {
      display: block;
    }

    & > ${StyledButton} + ${StyledButton}, & > a + a {
      margin-top: 1rem;
    }
  `,
  standalone: css``
};

const StyledButtonGroup = styled.div<Required<ButtonGroupProps>>`
  ${({ layout }) => buttonGroupStyleMap[layout]};
  ${({ align }) => {
    if (align === "right") {
      return css`
        justify-content: flex-end;
      `;
    }
    if (align === "center") {
      return css`
        justify-content: center;
      `;
    }
    return css`
      justify-content: left;
    `;
  }};
`;

export const ButtonGroup: FC<ButtonGroupProps> = ({
  layout = "stacked",
  align = "left",
  children
}) => (
  <StyledButtonGroup layout={layout} align={align}>
    {children}
  </StyledButtonGroup>
);
