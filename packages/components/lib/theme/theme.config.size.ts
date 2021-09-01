export interface ThemeSize {
  sizeFactor: number;
  baseFontSize: number;
  makeRem: (sizeInPixels: number) => string;
}

export const themeSizeDefaults: Omit<ThemeSize, "makeRem"> = {
  sizeFactor: 4,
  baseFontSize: 16
};

export const createThemeSize = (
  customThemeSize?: Omit<ThemeSize, "makeRem">
): ThemeSize => {
  const baseFontSize =
    customThemeSize?.baseFontSize || themeSizeDefaults.baseFontSize;

  return {
    sizeFactor: customThemeSize?.sizeFactor || themeSizeDefaults.sizeFactor,
    baseFontSize,
    makeRem: (sizeInPixels) => `${sizeInPixels / baseFontSize}rem`
  };
};
