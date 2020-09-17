import { Theme } from "@material-ui/core";
import { CSSObject, DefaultTheme } from "styled-components";

import { baseFontSize } from "./theme.config";

type MakeFlex = (params: {
  flexDirection?: CSSObject["flexDirection"];
  justifyContent?: CSSObject["justifyContent"];
  alignItems?: CSSObject["alignItems"];
}) => string;

/**
 * Generates a rem string from a defined pixel value
 *
 * @param sizeInPixels size in pixels
 */
export const makeRem = (sizeInPixels: number): string =>
  `${sizeInPixels / baseFontSize}rem`;

/**
 * A function that makes a component a flex container
 */
export const makeFlex: MakeFlex = ({
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start"
}) => `
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;

export const makeDesktopStyles = (theme: DefaultTheme | Theme): string =>
  theme.breakpoints.up("md");

export const makeMobileStyles = (theme: DefaultTheme | Theme): string =>
  theme.breakpoints.down("sm");
