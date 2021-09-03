type BreakpointKeys =
  | "mobile"
  | "tablet"
  | "tablet-landscape"
  | "laptop"
  | "desktop"
  | "4K";

export type ThemeBreakpointsValues = { [key in BreakpointKeys]: number };

export type ThemeBreakpoints = {
  values: ThemeBreakpointsValues;
  mobileOnly: string;
  tablet: string;
  tabletOnly: string;
  laptop: string;
  laptopOnly: string;
  desktop: string;
  desktopOnly: string;
  "4K": string;
};

export const themeBreakpointDefaults: Pick<ThemeBreakpoints, "values"> = {
  /**
   * The minimum pixel value of the device
   */
  values: {
    mobile: 320,
    tablet: 600,
    "tablet-landscape": 1024,
    laptop: 1024,
    desktop: 1440,
    "4K": 2560
  }
};

const createMediaQuery =
  (values: ThemeBreakpointsValues) =>
  ({ min, max }: { min?: BreakpointKeys | 0; max?: BreakpointKeys }) => {
    if (!min) {
      return `@media (min-width: 0)`;
    }
    if (min && !max) {
      return `@media (min-width: ${values[min]}px)`;
    }
    if (!min && max) {
      return `@media (min-width: ${values[min]}px)`;
    }
    if (min && max) {
      return `@media (min-width: ${values[min]}px) and (max-width: ${
        values[max] - 1
      }px)`;
    }
    throw "You should not be seeing this error. Breakpoints we're configured wrong. Check the theme";
  };

export const createThemeBreakpoints = (
  themeBreakpointsCustom?: Pick<ThemeBreakpoints, "values">
): ThemeBreakpoints => {
  const values = {
    ...themeBreakpointDefaults.values,
    ...(themeBreakpointsCustom?.values || {})
  };

  const makeMedia = createMediaQuery(values);

  return {
    values,
    mobileOnly: makeMedia({ max: "tablet" }),
    tablet: makeMedia({ min: "tablet" }),
    tabletOnly: makeMedia({ min: "tablet", max: "laptop" }),
    laptop: makeMedia({ min: "laptop" }),
    laptopOnly: makeMedia({ min: "laptop", max: "desktop" }),
    desktop: makeMedia({ min: "desktop" }),
    desktopOnly: makeMedia({ min: "desktop", max: "4K" }),
    "4K": makeMedia({ min: "4K" })
  };
};
