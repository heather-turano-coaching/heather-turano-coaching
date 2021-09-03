import { darken } from "polished";
import React from "react";
import styled, { css } from "styled-components";

import { buttonAndInputHeight } from "../shared";
import { ColorKeys } from "../theme";
import { HTMLButton } from "../types";
import { Typography } from "../typography2";

export type ButtonColors = Extract<
  ColorKeys,
  "primary" | "gray" | "accent" | "warning" | "danger"
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

    & + & {
      margin-left: ${theme.size.makeRem(20)};
    }

    &:not(:disabled) {
      background-color: ${variant === "filled"
        ? theme.palette[buttonColor].main
        : "transparent"};
      border-color: ${variant !== "text"
        ? theme.palette[buttonColor].main
        : "transparent"};

      &:hover {
        background-color: ${variant === "filled"
          ? theme.palette[buttonColor].dark
          : "transparent"};
        border-color: ${variant !== "text"
          ? theme.palette[buttonColor].dark
          : "transparent"};

        ${variant === "text" &&
        css`
          color: ${theme.palette[buttonColor].dark};
          transform: scale(1.1);
        `}
      }

      &:active {
        background-color: ${variant === "filled"
          ? darken(0.1, theme.palette[buttonColor].dark)
          : "transparent"};
        border-color: ${variant !== "text"
          ? darken(0.1, theme.palette[buttonColor].dark)
          : "transparent"};
        transform: scale(0.9);

        ${variant === "text" &&
        css`
          color: ${darken(0.1, theme.palette[buttonColor].dark)};
        `}
      }
    }

    &:disabled {
      cursor: initial;
      pointer-events: none;
      background: ${theme.palette.light.light};
      border-color: ${theme.palette.light.light};
      & > * {
        color: ${theme.palette.light.dark} !important;
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
