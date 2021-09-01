import { darken } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import {
  Color,
  ColorProperties,
  makeColor,
  makeInset,
  makeReset,
  makeSpace
} from "../design-system";
import { Typography } from "../display";
import {
  shareButtonAndInputFontSize,
  sharedButtonAndInputVerticalPadding
} from "../theme";
import { HTMLButton } from "../types";

type ButtonStyleTypes = Extract<
  Color,
  "primary" | "secondary" | "accent" | "warning" | "error"
>;

type ButtonProps = HTMLButton & {
  label: string;
  styleType?: ButtonStyleTypes;
  loading?: boolean;
};

const buttonStyleMap: {
  [key in ButtonStyleTypes]: {
    bgColor: string;
    bgColorHover: string;
    bgColorActive: string;
    borderColor: string;
    borderColorHover: string;
    borderColorActive: string;
  };
} = {
  primary: {
    bgColor: makeColor({ fixed: "light" }),
    bgColorHover: makeColor({ scalable: { color: "secondary", scale: 3 } }),
    bgColorActive: makeColor({ scalable: { color: "secondary", scale: 2 } }),
    borderColor: makeColor({ scalable: { color: "gray" } }),
    borderColorHover: makeColor({ scalable: { color: "gray" } }),
    borderColorActive: makeColor({ scalable: { color: "gray" } })
  },
  secondary: {
    bgColor: makeColor({ scalable: { color: "secondary" } }),
    bgColorHover: darken(0.05, makeColor({ scalable: { color: "secondary" } })),
    bgColorActive: darken(0.1, makeColor({ scalable: { color: "secondary" } })),
    borderColor: makeColor({ scalable: { color: "secondary" } }),
    borderColorHover: makeColor({ scalable: { color: "secondary" } }),
    borderColorActive: makeColor({ scalable: { color: "secondary" } })
  },
  accent: {
    bgColor: makeColor({ scalable: { color: "accent" } }),
    bgColorHover: makeColor({ scalable: { color: "accent", scale: 3 } }),
    bgColorActive: makeColor({ scalable: { color: "accent", scale: 2 } }),
    borderColor: makeColor({ scalable: { color: "accent" } }),
    borderColorHover: makeColor({ scalable: { color: "accent" } }),
    borderColorActive: makeColor({ scalable: { color: "accent" } })
  },
  warning: {
    bgColor: makeColor({ scalable: { color: "warning" } }),
    bgColorHover: darken(0.05, makeColor({ scalable: { color: "warning" } })),
    bgColorActive: darken(0.1, makeColor({ scalable: { color: "warning" } })),
    borderColor: makeColor({ scalable: { color: "warning" } }),
    borderColorHover: makeColor({ scalable: { color: "warning" } }),
    borderColorActive: makeColor({ scalable: { color: "warning" } })
  },
  error: {
    bgColor: makeColor({ scalable: { color: "error" } }),
    bgColorHover: darken(0.05, makeColor({ scalable: { color: "error" } })),
    bgColorActive: darken(0.1, makeColor({ scalable: { color: "error" } })),
    borderColor: makeColor({ scalable: { color: "error" } }),
    borderColorHover: makeColor({ scalable: { color: "error" } }),
    borderColorActive: makeColor({ scalable: { color: "error" } })
  }
};

export const StyledButton = styled.button<
  Required<Pick<ButtonProps, "styleType" | "disabled">>
>`
  ${makeReset("button")}
  ${makeInset({
    vertical: sharedButtonAndInputVerticalPadding,
    horizontal: 28
  })};
  border-radius: ${makeSpace({ custom: 2 })};
  transition: all ease-in-out 0.15s;
  border-width: 1px;
  border-style: solid;

  &:not(:disabled) {
    ${({ styleType }) => css`
      background-color: ${buttonStyleMap[styleType].bgColor};
      border-color: ${buttonStyleMap[styleType].borderColor};
    `}

    &:hover {
      ${({ styleType }) => css`
        background-color: ${buttonStyleMap[styleType].bgColorHover};
        border-color: ${buttonStyleMap[styleType].borderColorHover};
      `}
    }

    &:active {
      ${({ styleType }) => css`
        background-color: ${buttonStyleMap[styleType].bgColorActive};
        border-color: ${buttonStyleMap[styleType].borderColorActive};
      `}
    }
  }

  &:disabled {
    cursor: initial;
    pointer-events: none;
    background: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
    border-color: ${makeColor({ scalable: { color: "gray", scale: 2 } })};
  }
`;

export const Button: FC<ButtonProps> = ({
  children,
  label = undefined,
  styleType = "primary",
  loading = false,
  ...restProps
}) => (
  <StyledButton
    styleType={styleType}
    disabled={restProps.disabled || loading}
    {...restProps}
  >
    <Typography
      variant="label"
      fontSize={shareButtonAndInputFontSize}
      fontColor={((): ColorProperties => {
        if (
          styleType !== "primary" &&
          styleType !== "warning" &&
          styleType !== "accent"
        ) {
          return { fixed: "light" };
        }
        if (restProps.disabled || loading) {
          return { scalable: { color: "gray", scale: 2 } };
        }
        return { scalable: { color: "gray" } };
      })()}
    >
      {label || children}
    </Typography>
  </StyledButton>
);
