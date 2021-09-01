import { Theme } from "@material-ui/core";
import { CSSObject, DefaultTheme } from "styled-components";
import { css } from "styled-components";

import {
  Color,
  ColorProperties,
  FontProperties,
  ResponsiveBreakpoints,
  SpaceProperties,
  makeColor,
  makeSpace
} from "../design-system";
import { baseFontSize } from "./theme.config.base";
import { fontWeightValues } from "./theme.fonts";
import { FontWeights } from "./theme.types";

type MakeFlex = (params: {
  direction?: CSSObject["flexDirection"];
  justify?: CSSObject["justifyContent"];
  align?: CSSObject["alignItems"];
}) => string;

/**
 * A function that makes a component a flex container
 */
export const makeFlex: MakeFlex = ({
  direction = "row",
  justify = "flex-start",
  align = "flex-start"
}) => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;

export const flexRow = (
  justify: CSSObject["justifyContent"],
  align: CSSObject["alignItems"]
) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

/**
 * Generates a rem string from a defined pixel value
 *
 * @param sizeInPixels size in pixels
 */
export const makeRem = (sizeInPixels: number): string =>
  `${sizeInPixels / baseFontSize}rem`;

/**
 * Returns the number font weight associated with
 * the semantic name
 *
 */
export const makeFontWeight = (weight: FontWeights): number =>
  fontWeightValues[weight];

/**
 * Creates a valid media query string that can be interpolated
 * inside of a styled-component and used as a gated selector
 *
 * 600px and down
 */
export const makeMobileStyles = (theme: DefaultTheme | Theme): string =>
  theme.breakpoints.down("sm");

/**
 * Creates a valid media query string that can be interpolated
 * inside of a styled-component and used as a gated selector
 *
 * 600px and up
 */
export const makeTabletStyles = (theme: DefaultTheme | Theme): string =>
  theme.breakpoints.up("sm");

/**
 * Creates a valid media query string that can be interpolated
 * inside of a styled-component and used as a gated selector
 *
 * 960px and up
 */
export const makeDesktopStyles = (theme: DefaultTheme | Theme): string =>
  theme.breakpoints.up("md");

/**
 * Creates a valid media query string that can be interpolated
 * inside of a styled-component and used as a gated selector
 *
 * xl and up
 */
export const makeRetinaStyles = (theme: DefaultTheme | Theme): string =>
  theme.breakpoints.up("lg");

export type RandomColor = Extract<Color, "primary" | "secondary" | "accent">;

const possibleColor: [RandomColor, RandomColor, RandomColor] = [
  "primary",
  "secondary",
  "accent"
];

export const generateRandomColor = () => {
  const randomInt = (Math.random() * 3) | 0;
  return possibleColor[randomInt];
};

export const shareButtonAndInputFontSize: FontProperties["fontSize"] = "sm";
export const sharedElementSpacing: SpaceProperties = 16;
export const sharedButtonAndInputVerticalPadding = 12;

export const sharedHorizontalBodyPadding: ResponsiveBreakpoints = {
  phone: 24,
  phoneMd: 24,
  phoneLg: 24,
  tabletPortrait: 32,
  tabletLandscape: 32,
  laptop: 32,
  desktop: 32,
  "4K": 32
};

export const createImageBorder = (color: ColorProperties) => css`
  outline: 1px solid ${makeColor(color)};
  outline-offset: -${makeSpace(20)};
`;

export const universalShadow = `0 2px 12px 0 ${makeColor({
  scalable: { color: "gray", scale: 3 }
})}`;
