import { SimplePaletteColorOptions } from "@material-ui/core/styles/createPalette";

export const themePalette = {
  // Deep Blue/Green
  primary: {
    dark: "#4E8588",
    main: "#88ADAF",
    light: "#C2D5D6"
  } as SimplePaletteColorOptions,
  // Tan
  secondary: {
    dark: "#BF9F5A",
    main: "#D4BE90",
    light: "#E9DEC6"
  } as SimplePaletteColorOptions,
  // Light green
  accent: {
    dark: "#9AC371",
    main: "#BBD69F",
    light: "#DCEACE",
    contrastText: "#4E8588"
  } as SimplePaletteColorOptions,
  // darkscale
  noir: {
    dark: "#4A4A4A",
    main: "#858585",
    light: "#C1C1C1",
    contrastText: "#FFF"
  } as SimplePaletteColorOptions,
  // lightscale
  light: {
    dark: "#EAECEC",
    main: "#F0F2F2",
    light: "#F7F8F8",
    contrastText: "#4E8588"
  } as SimplePaletteColorOptions,
  common: {
    white: "#fff",
    black: "#000"
  }
};
