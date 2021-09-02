import { darken } from "polished";
import React from "react";
import styled, { css } from "styled-components";

import { buttonAndInputHeight } from "../shared";
import { ColorKeys } from "../theme";
import { HTMLButton } from "../types";
import { Typography } from "../typography2";

export type ButtonColors = Extract<
  ColorKeys,
  "primary" | "dark" | "accent" | "warning" | "danger"
>;

type ButtonProps = HTMLButton & {
  color?: ButtonColors;
  loading?: boolean;
  variant?: "filled" | "text" | "outlined";
  component?: "button" | "a";
  onClick?: () => void;
  target?: string;
  href?: string;
  rel?: string;
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
  dark: {
    bgColor: "dark",
    bgColorHover: "dark",
    bgColorActive: "dark",
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
    Pick<Omit<ButtonProps, "color">, "disabled" | "variant" | "href"> & {
      buttonColor: ButtonColors;
    }
  >
>`
  ${({ theme, buttonColor, variant }) => css`
    height: ${theme.size.makeRem(buttonAndInputHeight)};
    border-radius: ${theme.size.makeRem(2)};
    transition: all ease-in-out 0.15s;
    border-width: 1px;
    border-style: solid;
    padding-left: ${theme.size.makeRem(12)};
    padding-right: ${theme.size.makeRem(12)};
    min-width: ${theme.size.makeRem(12)};
    cursor: pointer;
    min-width: ${theme.size.makeRem(120)};

    &:not(:disabled) {
      background-color: ${variant === "filled"
        ? theme.palette[buttonStyleMap[buttonColor].bgColor].main
        : "transparent"};
      border-color: ${variant !== "text"
        ? theme.palette[buttonStyleMap[buttonColor].borderColor].main
        : "transparent"};

      &:hover {
        background-color: ${variant === "filled"
          ? theme.palette[buttonStyleMap[buttonColor].bgColorHover].dark
          : "transparent"};
        border-color: ${variant !== "text"
          ? theme.palette[buttonStyleMap[buttonColor].borderColorHover].dark
          : "transparent"};

        ${variant === "text" &&
        css`
          color: ${theme.palette[buttonColor].dark};
          transform: scale(1.1);
        `}
      }

      &:active {
        background-color: ${variant === "filled"
          ? darken(
              0.2,
              theme.palette[buttonStyleMap[buttonColor].bgColorActive].dark
            )
          : "transparent"};
        border-color: ${variant !== "text"
          ? darken(
              0.2,
              theme.palette[buttonStyleMap[buttonColor].borderColorActive].dark
            )
          : "transparent"};
        transform: scale(0.9);

        ${variant === "text" &&
        css`
          color: ${darken(0.2, theme.palette[buttonColor].dark)};
        `}
      }
    }

    &:disabled {
      cursor: initial;
      pointer-events: none;
      background: ${theme.palette.dark.light};
      border-color: ${theme.palette.dark.light};
      & > * {
        color: ${theme.palette.dark.main} !important;
      }
    }
  `}
`;

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      onClick,
      href,
      children,
      variant = "filled",
      color = "primary",
      loading = false,
      component = "button",
      ...restProps
    },
    ref
  ) {
    return (
      <StyledButton
        ref={ref}
        buttonColor={color}
        variant={variant}
        disabled={restProps.disabled || loading}
        as={component}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        href={href}
        onClick={onClick}
        {...restProps}
      >
        <Typography
          variant="body1"
          color={color}
          colorVariant={variant === "filled" ? "contrast" : "main"}
        >
          {children}
        </Typography>
      </StyledButton>
    );
  }
);
