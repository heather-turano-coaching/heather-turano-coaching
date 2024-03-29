import { Overrides } from "@material-ui/core/styles/overrides";
import { darken } from "polished";

import { themePalette } from "./theme.config.palette";
import { makeFontWeight, makeRem } from "./theme.utils";

const darkenHover = (value: string | undefined): string =>
  darken(0.1, value as string);

export const themeOverrides: Overrides = {
  MuiContainer: {
    root: {
      paddingLeft: makeRem(32),
      paddingRight: makeRem(32)
    }
  },
  MuiButton: {
    label: {
      fontSize: makeRem(16),
      fontWeight: makeFontWeight("bold"),
      textTransform: "initial"
    },
    containedPrimary: {
      backgroundColor: themePalette.primary.dark,
      color: themePalette.common?.white,
      "& > span": {
        color: "inherit !important"
      },
      "&:hover": {
        backgroundColor: darkenHover(themePalette.primary.dark)
      }
    },
    outlinedPrimary: {
      borderColor: themePalette.primary.dark,
      color: themePalette.primary.dark,
      "& > span": {
        color: "inherit !important"
      }
    },
    textPrimary: {
      color: themePalette.primary.dark
    },
    containedSecondary: {
      color: themePalette.common?.white,
      backgroundColor: themePalette.secondary.dark,
      "&:hover": {
        backgroundColor: darkenHover(themePalette.secondary.dark)
      }
    },
    outlinedSecondary: {
      borderColor: themePalette.noir.dark,
      "& > span": {
        color: themePalette.noir.dark
      },
      "&:hover": {
        borderColor: darkenHover(themePalette.noir.dark),
        "& > span": {
          color: darkenHover(themePalette.noir.dark)
        }
      }
    },
    textSecondary: {
      color: themePalette.noir.dark
    }
  }
};
