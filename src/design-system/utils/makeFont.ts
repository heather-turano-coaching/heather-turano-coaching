import { fontConfig, sizeConfig } from "../configs";
import {
  ColorProperties,
  FontFamily,
  FontProperties,
  FontStyle
} from "../types/composite";
import { Size } from "../types/primitive";
import { makeColor } from "./makeColor";
import {
  convertHeadingSizeToSize,
  createCustomSize,
  sizeMap
} from "./makeSize";

const createFontColor = (
  fontColor: ColorProperties | undefined
): { color: string } | Record<string, unknown> =>
  fontColor ? { color: makeColor(fontColor) } : {};

export const makeFont = ({
  fontSize,
  lineHeight,
  fontFamily = fontConfig.defaults.fontFamily,
  fontWeight = fontConfig.defaults.fontWeight,
  fontStyle = fontConfig.defaults.fontStyle,
  fontColor = fontConfig.defaults.fontColor
}: FontProperties): {
  fontSize: string;
  lineHeight: string;
  fontFamily: FontFamily;
  fontWeight: number;
  fontStyle: FontStyle;
  color?: string;
} => {
  const createFontSizeAndLineHeight = (): {
    fontSize: string;
    lineHeight: string;
  } => {
    if (typeof fontSize === "object" && typeof lineHeight === "object") {
      return {
        fontSize: createCustomSize(fontSize.custom),
        lineHeight: createCustomSize(lineHeight.custom)
      };
    }

    if (typeof fontSize === "object" && typeof lineHeight === "undefined") {
      return {
        fontSize: createCustomSize(fontSize.custom),
        lineHeight: sizeConfig.lineHeight.toString()
      };
    }

    if (typeof fontSize === "object" && typeof lineHeight === "string") {
      return {
        fontSize: createCustomSize(fontSize.custom),
        lineHeight: sizeMap.lineHeight[lineHeight][sizeConfig.sizeUnits]
      };
    }

    if (typeof fontSize === "string" && typeof lineHeight === "object") {
      const convertedFs = convertHeadingSizeToSize(fontSize as Size);
      const fs = sizeMap.fontSize[convertedFs][sizeConfig.sizeUnits];
      const lh = createCustomSize(lineHeight.custom);
      return { fontSize: fs, lineHeight: lh };
    }

    if (typeof fontSize === "string" && typeof lineHeight === "undefined") {
      const convertedFs = convertHeadingSizeToSize(fontSize as Size);
      const fs = sizeMap.fontSize[convertedFs][sizeConfig.sizeUnits];
      const lh = sizeMap.lineHeight[convertedFs][sizeConfig.sizeUnits];
      return { fontSize: fs, lineHeight: lh };
    }

    /**
     * We can assume that `lineHeight` is going to be a {Size} since
     * it's not an object and it's not undefined
     *
     * The checks above need to be exhaustive
     */
    const convertedFs = convertHeadingSizeToSize(fontSize as Size);
    return {
      fontSize: sizeMap.fontSize[convertedFs][sizeConfig.sizeUnits],
      lineHeight: sizeMap.lineHeight[lineHeight as Size][sizeConfig.sizeUnits]
    };
  };

  return {
    ...createFontSizeAndLineHeight(),
    ...createFontColor(fontColor),
    fontFamily,
    fontWeight: Number(fontConfig.fontWeightMap[fontWeight]),
    fontStyle
  };
};
