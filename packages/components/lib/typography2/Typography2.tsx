import React, { FC } from "react";
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css
} from "styled-components";

import type {
  ColorKeys,
  ColorVariants,
  TypographyHeadingVariants,
  TypographyVariants
} from "../theme";
import { HTMLElementProps } from "../types";
import {
  CSSBody1,
  CSSBody2,
  CSSCaption,
  CSSH1,
  CSSH2,
  CSSH3,
  CSSH4,
  CSSH5,
  CSSH6,
  CSSOverline,
  CSSSubtitle1,
  CSSSubtitle2
} from "./typography.styles";

export type TypographyProps = HTMLElementProps & {
  /**
   * @default body1
   */
  variant?: TypographyVariants;
  /**
   * @default div
   */
  component?: TypographyHeadingVariants | "div" | "p" | "span";
  /**
   * @default inherit
   */
  color?: ColorKeys;
  /**
   * @default main
   */
  colorVariant?: ColorVariants;
  /**
   * @default inherit
   */
  align?: "inherit" | "left" | "center" | "right";
};

const typographyVariantStyleMap: {
  [key in TypographyVariants]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  h1: CSSH1,
  h2: CSSH2,
  h3: CSSH3,
  h4: CSSH4,
  h5: CSSH5,
  h6: CSSH6,
  body1: CSSBody1,
  body2: CSSBody2,
  subtitle1: CSSSubtitle1,
  subtitle2: CSSSubtitle2,
  overline: CSSOverline,
  caption: CSSCaption
};

const StyledTypography = styled.div<
  Omit<TypographyProps, "component" | "color" | "colorVariant"> & {
    fontColor: ColorKeys;
    fontColorVariant: ColorVariants;
  }
>`
  ${({
    theme,
    variant = "body1",
    fontColor = "inherit",
    fontColorVariant = "main"
  }) => css`
    ${typographyVariantStyleMap[variant]};
    color: ${fontColor === "inherit"
      ? "inherit"
      : theme.palette[fontColor as ColorKeys][fontColorVariant]};
  `}
`;

export const Typography: FC<TypographyProps> = ({
  variant = "body1",
  component = "div",
  color = "dark",
  colorVariant = "main",
  align = "inherit",
  children,
  ...restProps
}) => (
  <StyledTypography
    as={component}
    fontColor={color}
    fontColorVariant={colorVariant}
    align={align}
    variant={variant}
    {...restProps}
  >
    {children}
  </StyledTypography>
);
