import { darken } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { buttonAndInputHeight } from "../shared";
import { ColorKeys } from "../theme";
import { HTMLButton } from "../types";
import { Typography } from "../typography2";

type ButtonColors = Extract<
  ColorKeys,
  "primary" | "secondary" | "accent" | "warning" | "danger"
>;

type ButtonProps = HTMLButton & {
  color?: ButtonColors;
  loading?: boolean;
  variant?: "filled" | "text" | "outlined";
};

const buttonStyleMap: {
  [key in ButtonColors]: {
    bgColor: ColorKeys;
    bgColorHover: ColorKeys;
    bgColorActive: ColorKeys;
    borderColor: ColorKeys;
    borderColorHover: ColorKeys;
    borderColorActive: ColorKeys;
  };
} = {
  primary: {
    bgColor: "primary",
    bgColorHover: "primary",
    bgColorActive: "primary",
    borderColor: "primary",
    borderColorHover: "primary",
    borderColorActive: "primary"
  },
  secondary: {
    bgColor: "secondary",
    bgColorHover: "secondary",
    bgColorActive: "secondary",
    borderColor: "dark",
    borderColorHover: "dark",
    borderColorActive: "dark"
  },
  accent: {
    bgColor: "accent",
    bgColorHover: "accent",
    bgColorActive: "accent",
    borderColor: "accent",
    borderColorHover: "accent",
    borderColorActive: "accent"
  },
  warning: {
    bgColor: "warning",
    bgColorHover: "warning",
    bgColorActive: "warning",
    borderColor: "warning",
    borderColorHover: "warning",
    borderColorActive: "warning"
  },
  danger: {
    bgColor: "warning",
    bgColorHover: "warning",
    bgColorActive: "warning",
    borderColor: "warning",
    borderColorHover: "warning",
    borderColorActive: "warning"
  }
};

export const StyledButton = styled.button<
  Required<
    Pick<Omit<ButtonProps, "color">, "disabled" | "variant"> & {
      fontColor: ButtonColors;
    }
  >
>`
  ${({ theme, fontColor, variant }) => css`
    height: ${theme.size.makeRem(buttonAndInputHeight)};
    border-radius: ${theme.size.makeRem(2)};
    transition: all ease-in-out 0.15s;
    border-width: 1px;
    border-style: solid;
    padding-left: ${theme.size.makeRem(12)};
    padding-right: ${theme.size.makeRem(12)};
    min-width: ${theme.size.makeRem(12)};
    cursor: pointer;

    &:not(:disabled) {
      background-color: ${theme.palette[buttonStyleMap[fontColor].bgColor]
        .main};
      border-color: ${theme.palette[buttonStyleMap[fontColor].borderColor]
        .main};

      &:hover {
        background-color: ${theme.palette[
          buttonStyleMap[fontColor].bgColorHover
        ].dark};
        border-color: ${theme.palette[
          buttonStyleMap[fontColor].borderColorHover
        ].dark};
      }

      &:active {
        background-color: ${darken(
          0.2,
          theme.palette[buttonStyleMap[fontColor].bgColorActive].dark
        )};
        border-color: ${darken(
          0.2,
          theme.palette[buttonStyleMap[fontColor].borderColorActive].dark
        )};
      }
    }

    &:disabled {
      cursor: initial;
      pointer-events: none;
      background: ${theme.palette.dark.light};
      border-color: ${theme.palette.dark.light};
    }
  `}
`;

export const Button: FC<ButtonProps> = ({
  children,
  variant = "filled",
  color = "primary",
  loading = false,
  ...restProps
}) => {
  return (
    <StyledButton
      fontColor={color}
      variant={variant}
      disabled={restProps.disabled || loading}
      {...restProps}
    >
      <Typography variant="body1" color={[color, "contrast"]}>
        {children}
      </Typography>
    </StyledButton>
  );
};
