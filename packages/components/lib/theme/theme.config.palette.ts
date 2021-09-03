export type ColorKeys =
  | "primary"
  | "secondary"
  | "accent"
  | "gray"
  | "light"
  | "danger"
  | "warning"
  | "success";
export type ColorVariants = "dark" | "light" | "main" | "contrast";

export type ThemePalette = {
  [key in ColorKeys]: { [key in ColorVariants]: string };
} & {
  common: {
    white: string;
    black: string;
  };
};

export const themePaletteDefaults: ThemePalette = {
  // Deep Blue/Green
  primary: {
    dark: "#3e686a",
    main: "#4e8588",
    light: "#C2D5D6",
    contrast: "#fff"
  },
  // Tan
  secondary: {
    dark: "#BF9F5A",
    main: "#D4BE90",
    light: "#E9DEC6",
    contrast: "#fff"
  },
  // Light green
  accent: {
    dark: "#9AC371",
    main: "#BBD69F",
    light: "#DCEACE",
    contrast: "#4A4A4A"
  },
  // darkscale
  gray: {
    dark: "#4A4A4A",
    main: "#858585",
    light: "#C1C1C1",
    contrast: "#FFF"
  },
  // lightscale
  light: {
    dark: "#EAECEC",
    main: "#F0F2F2",
    light: "#F7F8F8",
    contrast: "#4E8588"
  },
  danger: {
    dark: "#EAECEC",
    main: "#F0F2F2",
    light: "#F7F8F8",
    contrast: "#4E8588"
  },
  warning: {
    dark: "#EAECEC",
    main: "#F0F2F2",
    light: "#F7F8F8",
    contrast: "#4E8588"
  },
  success: {
    dark: "#EAECEC",
    main: "#F0F2F2",
    light: "#F7F8F8",
    contrast: "#4E8588"
  },
  common: {
    white: "#fff",
    black: "#000"
  }
};

export const createThemePalette = (
  themePaletteCustom?: ThemePalette
): ThemePalette => {
  return {
    primary: {
      ...themePaletteDefaults.primary,
      ...(themePaletteCustom?.primary || {})
    },
    secondary: {
      ...themePaletteDefaults.secondary,
      ...(themePaletteCustom?.secondary || {})
    },
    accent: {
      ...themePaletteDefaults.accent,
      ...(themePaletteCustom?.accent || {})
    },
    gray: {
      ...themePaletteDefaults.gray,
      ...(themePaletteCustom?.gray || {})
    },
    light: {
      ...themePaletteDefaults.light,
      ...(themePaletteCustom?.light || {})
    },
    danger: {
      ...themePaletteDefaults.danger,
      ...(themePaletteCustom?.danger || {})
    },
    warning: {
      ...themePaletteDefaults.warning,
      ...(themePaletteCustom?.warning || {})
    },
    success: {
      ...themePaletteDefaults.success,
      ...(themePaletteCustom?.success || {})
    },
    common: {
      ...themePaletteDefaults.common,
      ...(themePaletteCustom?.common || {})
    }
  };
};
