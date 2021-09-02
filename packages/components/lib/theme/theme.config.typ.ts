export type TypographyFontWeights =
  | "light"
  | "regular"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

export type TypographyFontFamily = string;
export type TypographyHeadingVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2";
export type TypographyTextVariants = "body1" | "body2" | "caption" | "overline";
export type TypographyVariants =
  | TypographyHeadingVariants
  | TypographyTextVariants;
export type TypographyThemeProperties = {
  fontFamily: TypographyFontFamily;
  fontWeight: TypographyFontWeights;
  fontSize: number;
  margin: [vertical: number, horizontal: number];
  lineHeight: number;
};

export const fontWeightValues: { [key in TypographyFontWeights]: number } = {
  light: 200,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

export type ThemeTypography = {
  [key in TypographyHeadingVariants]: TypographyThemeProperties;
} &
  {
    [key in TypographyTextVariants]: Omit<TypographyThemeProperties, "margin">;
  };

export const themeTypographyDefaults: ThemeTypography = {
  h1: {
    fontFamily: "Montserrat",
    fontWeight: "regular",
    fontSize: 38,
    margin: [16, 0],
    lineHeight: 1.4
  },
  h2: {
    fontFamily: "Montserrat",
    fontWeight: "regular",
    fontSize: 34,
    margin: [16, 0],
    lineHeight: 1.4
  },
  h3: {
    fontFamily: "Montserrat",
    fontWeight: "semiBold",
    fontSize: 28,
    margin: [18, 0],
    lineHeight: 1.4
  },
  h4: {
    fontFamily: "Montserrat",
    fontWeight: "semiBold",
    fontSize: 24,
    margin: [16, 0],
    lineHeight: 1.4
  },
  h5: {
    fontFamily: "Montserrat",
    fontWeight: "semiBold",
    fontSize: 18,
    margin: [16, 0],
    lineHeight: 1.4
  },
  h6: {
    fontFamily: "Montserrat",
    fontWeight: "semiBold",
    fontSize: 16,
    margin: [8, 0],
    lineHeight: 1.4
  },
  subtitle1: {
    fontFamily: "Muli",
    fontWeight: "regular",
    fontSize: 18,
    margin: [20, 0],
    lineHeight: 1.4
  },
  subtitle2: {
    fontFamily: "Muli",
    fontWeight: "regular",
    fontSize: 16,
    margin: [16, 0],
    lineHeight: 1.4
  },
  body1: {
    fontFamily: "Muli",
    fontWeight: "semiBold",
    fontSize: 16,
    lineHeight: 2
  },
  body2: {
    fontFamily: "Muli",
    fontWeight: "semiBold",
    fontSize: 12,
    lineHeight: 2
  },
  caption: {
    fontFamily: "Muli",
    fontWeight: "regular",
    fontSize: 10,
    lineHeight: 1.4
  },
  overline: {
    fontFamily: "Muli",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 3
  }
};

export const createThemeTypography = (
  themeTypographyCustom?: ThemeTypography
): ThemeTypography => {
  return {
    h1: {
      ...themeTypographyDefaults.h1,
      ...(themeTypographyCustom?.h1 || {})
    },
    h2: {
      ...themeTypographyDefaults.h2,
      ...(themeTypographyCustom?.h2 || {})
    },
    h3: {
      ...themeTypographyDefaults.h3,
      ...(themeTypographyCustom?.h3 || {})
    },
    h4: {
      ...themeTypographyDefaults.h4,
      ...(themeTypographyCustom?.h4 || {})
    },
    h5: {
      ...themeTypographyDefaults.h5,
      ...(themeTypographyCustom?.h5 || {})
    },
    h6: {
      ...themeTypographyDefaults.h6,
      ...(themeTypographyCustom?.h6 || {})
    },
    subtitle1: {
      ...themeTypographyDefaults.subtitle1,
      ...(themeTypographyCustom?.subtitle1 || {})
    },
    subtitle2: {
      ...themeTypographyDefaults.subtitle2,
      ...(themeTypographyCustom?.subtitle2 || {})
    },
    body1: {
      ...themeTypographyDefaults.body1,
      ...(themeTypographyCustom?.body1 || {})
    },
    body2: {
      ...themeTypographyDefaults.body2,
      ...(themeTypographyCustom?.body2 || {})
    },
    caption: {
      ...themeTypographyDefaults.caption,
      ...(themeTypographyCustom?.caption || {})
    },
    overline: {
      ...themeTypographyDefaults.overline,
      ...(themeTypographyCustom?.overline || {})
    }
  };
};
