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
    dark: "#2f5052",
    main: "#4e8588",
    light: "#8EBCBE",
    contrast: "#fff"
  },
  // Tan
  secondary: {
    dark: "#79622f",
    main: "#BF9F5A",
    light: "#E5d9bd",
    contrast: "#fff"
  },
  // Light green
  accent: {
    dark: "#5c8136",
    main: "#9ac371",
    light: "#c2dba9",
    contrast: "#fff"
  },
  // darkscale
  gray: {
    dark: "#1f1f1f",
    main: "#333333",
    light: "#858585",
    contrast: "#FFF"
  },
  // lightscale
  light: {
    dark: "#879292",
    main: "#EAECEC",
    light: "#f2f3f3",
    contrast: "#000"
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
