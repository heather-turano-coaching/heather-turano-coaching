import { mix } from "polished";

import { colorConfig } from "../configs";
import {
  ColorBlendRatios,
  ColorHex,
  ColorProperties,
  ColorScales
} from "../types/composite";
import { ColorFixed, ColorScalable } from "../types/primitive/color.primitive";

type ColorMapScalable = { [key in ColorScalable]: ColorScales };
type ColorMapFixed = { [key in ColorFixed]: ColorHex };

const createColor = (
  scaler: ColorBlendRatios,
  color: ColorScalable
): ColorHex =>
  mix(scaler, colorConfig.fixed.light, colorConfig.scalable[color]);

const createColorScale = (hex: ColorScalable): ColorScales => [
  colorConfig.scalable[hex],
  createColor(0.25, hex),
  createColor(0.5, hex),
  createColor(0.75, hex)
];

const scalableColorMap: ColorMapScalable = {
  primary: createColorScale("primary"),
  secondary: createColorScale("secondary"),
  accent: createColorScale("accent"),
  gray: createColorScale("gray"),
  light: createColorScale("light"),
  success: createColorScale("success"),
  warning: createColorScale("warning"),
  error: createColorScale("error")
};

const fixedColorMap: ColorMapFixed = {
  light: colorConfig.fixed.light,
  dark: colorConfig.fixed.dark,
  "bright-green": colorConfig.fixed["bright-green"]
};

export const makeColor = ({
  fixed,
  scalable,
  custom
}: ColorProperties): ColorHex => {
  if (scalable && scalable.color) {
    return scalableColorMap[scalable.color][scalable.scale || 0];
  }
  if (fixed) {
    return fixedColorMap[fixed];
  }
  if (custom) {
    return custom;
  }
  return "";
};
