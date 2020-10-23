import { createMuiTheme } from "@material-ui/core";

import { themeOverrides } from "./theme.config.overrides";
import { themePalette } from "./theme.config.palette";
import { themeProps } from "./theme.config.props";
import { makeRem } from "./theme.utils";

export const themeConfig = createMuiTheme({
  palette: themePalette,
  typography: {
    fontFamily: "Muli",
    h1: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: 1,
      fontSize: makeRem(58),
      margin: `${makeRem(24)} 0`
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(48),
      margin: `${makeRem(24)} 0`
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(36),
      margin: `${makeRem(24)} 0`
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(24),
      margin: `${makeRem(24)} 0`
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: makeRem(18),
      margin: `${makeRem(24)} 0`
    },
    subtitle1: {
      fontFamily: "Muli",
      fontWeight: 500,
      fontSize: makeRem(22),
      margin: `${makeRem(20)} 0`
    },
    subtitle2: {
      fontWeight: 500,
      fontFamily: "Muli",
      fontSize: makeRem(18)
    }
  },
  overrides: themeOverrides,
  props: themeProps
});
