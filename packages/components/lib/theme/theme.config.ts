import {
  ThemeBreakpoints,
  createThemeBreakpoints
} from "./theme.config.breakpoints";
import { createThemePalette } from "./theme.config.palette";
import { ThemePalette } from "./theme.config.palette";
import { ThemeSize, createThemeSize } from "./theme.config.size";
import { ThemeTypography, createThemeTypography } from "./theme.config.typ";

export type HTCTheme = {
  palette: ThemePalette;
  size: ThemeSize;
  breakpoints: ThemeBreakpoints;
  typ: ThemeTypography;
};

export type CreateHTCTheme = {
  palette: ThemePalette;
  size: Omit<ThemeSize, "makeRem">;
  breakpoints: Pick<ThemeBreakpoints, "values">;
  typ: ThemeTypography;
};

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends HTCTheme {}
}

export const createHTCTheme = (customHTCTheme?: HTCTheme): HTCTheme => {
  return {
    palette: createThemePalette(customHTCTheme?.palette),
    breakpoints: createThemeBreakpoints(customHTCTheme?.breakpoints),
    size: createThemeSize(customHTCTheme?.size),
    typ: createThemeTypography(customHTCTheme?.typ)
  };
};
