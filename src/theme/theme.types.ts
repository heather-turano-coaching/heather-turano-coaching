/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from "@material-ui/core";
import { SimplePaletteColorOptions } from "@material-ui/core/styles/createPalette";

interface ExtraPalette {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  noir: SimplePaletteColorOptions;
  light: SimplePaletteColorOptions;
  accent: SimplePaletteColorOptions;
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette extends ExtraPalette {}
  interface PaletteOptions extends ExtraPalette {}
}

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    /**
     * Custom MachineQ Properties added to the base
     * Material Theme
     */
    palette: Theme["palette"] & ExtraPalette;
  }
}

export type FontWeights =
  | "light"
  | "regular"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";
