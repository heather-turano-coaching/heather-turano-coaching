import { Theme } from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

interface ExtraPalette {
  noir: PaletteColor;
  light: PaletteColor;
  accent: PaletteColor;
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
