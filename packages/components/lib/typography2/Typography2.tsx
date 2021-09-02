import React, { FC } from "react";
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css
} from "styled-components";

import { ColorKeys, ColorVariants } from "../theme/theme.config.palette";
import {
  TypographyHeadingVariants,
  TypographyVariants
} from "../theme/theme.config.typ";
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

export type TypographyProps = {
  /**
   * @default body1
   */
  variant: TypographyVariants;
  /**
   * @default div
   */
  component?: TypographyHeadingVariants | "div" | "p" | "span";
  /**
   * @default inherit
   */
  color?: [ColorKeys, ColorVariants] | "inherit";
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
  Required<
    Omit<TypographyProps, "component" | "color"> & {
      fontColor: TypographyProps["color"];
    }
  >
>`
  ${({ theme, variant, fontColor = "inherit" }) => css`
    ${typographyVariantStyleMap[variant]};
    color: ${fontColor === "inherit"
      ? "inherit"
      : theme.palette[fontColor[0]][fontColor[1]]};
  `}
`;

export const Typography: FC<TypographyProps> = ({
  variant,
  component = "div",
  color = "inherit",
  align = "inherit",
  children,
  ...restProps
}) => (
  <StyledTypography
    as={component}
    fontColor={color}
    align={align}
    variant={variant}
    {...restProps}
  >
    {children}
  </StyledTypography>
);
