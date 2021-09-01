import {
  ThemeBreakpoints,
  createThemeBreakpoints
} from "./theme.config.breakpoints";
import { createThemePalette } from "./theme.config.palette";
import { ThemePalette } from "./theme.config.palette";
import { ThemeSize, createThemeSize } from "./theme.config.size";

export type HTCTheme = {
  palette: ThemePalette;
  size: ThemeSize;
  breakpoints: ThemeBreakpoints;
};

export type CreateHTCTheme = {
  palette: ThemePalette;
  size: ThemeSize;
  breakpoints: Pick<ThemeBreakpoints, "values">;
};

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends HTCTheme {}
}

export const createTheme = (customHTCTheme?: HTCTheme): HTCTheme => {
  return {
    palette: createThemePalette(customHTCTheme?.palette),
    breakpoints: createThemeBreakpoints(customHTCTheme?.breakpoints),
    size: createThemeSize(customHTCTheme?.size)
  };
};
