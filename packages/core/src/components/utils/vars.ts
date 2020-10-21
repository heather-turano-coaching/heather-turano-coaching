import { css } from "styled-components";

import {
  ColorProperties,
  FontProperties,
  SpaceProperties
} from "../../design-system";
import { makeColor, makeSpace } from "../../design-system";
import { ResponsiveBreakpoints } from "../../design-system";

export const shareButtonAndInputFontSize: FontProperties["fontSize"] = "sm";
export const sharedElementSpacing: SpaceProperties = 16;
export const sharedButtonAndInputVerticalPadding: number = 12;

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