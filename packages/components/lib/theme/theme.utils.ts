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
import { TypographyFontWeights, fontWeightValues } from "./theme.config.typ";

/**
 * Returns the number font weight associated with
 * the semantic name
 *
 */
export const makeFontWeight = (weight: TypographyFontWeights): number =>
  fontWeightValues[weight];

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
