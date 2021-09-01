import { ComponentsProps } from "@material-ui/core/styles/props";

export const themeProps: ComponentsProps = {
  MuiButtonBase: {
    disableRipple: true,
    disableTouchRipple: true,
    focusRipple: false
  },
  MuiButton: {
    disableElevation: true
  }
};
