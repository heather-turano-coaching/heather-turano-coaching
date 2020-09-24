import { em, modularScale, rem } from "polished";

import { fontConfig, sizeConfig } from "../configs";
import { SizeHeadings, SizeProperties, SizeUnits } from "../types/composite";
import { Size } from "../types/primitive";

type Sizes = { [key in Size]: string };
type SizeFn = (size: Size) => string;

type SizeMapValues = {
  [key in Size]: { [key in SizeUnits]: string };
};

interface SizeMap {
  size: SizeMapValues;
  fontSize: SizeMapValues;
  lineHeight: SizeMapValues;
}

type SnapToGrid = (
  fontSize: string,
  baselineGrid: number,
  options?: { multiplier: number }
) => string;

const sizeUnitArr: SizeUnits[] = ["raw", "em", "px", "rem"];
const sizeArr = Object.keys(sizeConfig.fontSizeScaleMap);

const separateSizeValueFromUnits = (
  size: string
): { value: number; units: string } => {
  const sep = size.split(/(em|rem|px)/g);
  return {
    value: Number(sep[0]),
    units: sep[1]
  };
};

const snapValueToBaselineGrid = ({
  value,
  baselineGrid,
  multiplier = 1
}: {
  value: number;
  baselineGrid: number;
  multiplier?: number;
}) => {
  const transformedValue = value * multiplier;

  const snappedValue =
    Math.round(transformedValue / baselineGrid) * baselineGrid;
  return snappedValue;
};

const snapToGrid: SnapToGrid = (fontSize, baselineGrid, options) => {
  const { value, units } = separateSizeValueFromUnits(fontSize);
  const snappedValue = snapValueToBaselineGrid({
    value,
    baselineGrid,
    multiplier: options ? options.multiplier : undefined
  });

  return `${snappedValue}${units}`;
};

type ConvertToUnits = (value: string | number, unit?: SizeUnits) => string;

export const convertToUnits: ConvertToUnits = (
  value,
  unit = sizeConfig.sizeUnits
) => {
  if (unit === "em") return em(value, sizeConfig.documentFontSize);
  if (unit === "rem") return rem(value, sizeConfig.documentFontSize);
  return value as string;
};

const createSizeUnitMap = (getSizeValueFn: SizeFn) =>
  sizeArr.reduce(
    (sAccum, size) => ({
      ...sAccum,
      [size]: sizeUnitArr.reduce(
        (uAccum, unit) => ({
          ...uAccum,
          [unit]: convertToUnits(getSizeValueFn(size as Size), unit),
          raw: separateSizeValueFromUnits(getSizeValueFn(size as Size)).value
        }),
        {}
      )
    }),
    {}
  );

const createSizes = () => {
  // this could obviously be better, but this was done for debugging purposes

  // 0. TBD - Determines type of design system that needs to be in place
  // default option =  baselineGrid w. modular scale

  // 1. adjust base font to align to snap to the grid
  const adjustedBaseFontSize = snapToGrid(
    sizeConfig.baseFontSize,
    sizeConfig.baselineGrid
  );

  // 2. create font size map based upon adjustedBaseFont
  const modularScaleFontSizeMap = Object.entries(
    sizeConfig.fontSizeScaleMap
  ).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: modularScale(
        value,
        adjustedBaseFontSize,
        sizeConfig.modularScaleRatio
      )
    }),
    {} as Sizes
  );

  // 3. round font size map to factor
  const snappedFontSizeMap = Object.entries(modularScaleFontSizeMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: snapToGrid(value, sizeConfig.baselineGrid)
    }),
    {} as Sizes
  );

  // 4. create line height size map based upon adjustedFontBase
  const snappedLineHeightMap = Object.entries(modularScaleFontSizeMap).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: snapToGrid(value, sizeConfig.baselineGrid, {
        multiplier: sizeConfig.lineHeight
      })
    }),
    {} as Sizes
  );

  return {
    size: createSizeUnitMap(
      (size) => snappedLineHeightMap[size]
    ) as SizeMap["size"],
    lineHeight: createSizeUnitMap(
      (size) => snappedLineHeightMap[size]
    ) as SizeMap["lineHeight"],
    fontSize: createSizeUnitMap(
      (size) => snappedFontSizeMap[size]
    ) as SizeMap["fontSize"]
  };
};

export const createCustomSize = (customSize: number) => {
  // console.warn(
  //   "You're using a custom size that falls outside the boundaries of the design system. All future updates to the design system will not have an affect on this value and instead will have to be manually changed or adjusted. Use with caution."
  // );
  // console.debug(customSize);
  // console.debug(convertToUnits(customSize));
  return convertToUnits(customSize);
};

export const sizeMap: SizeMap = createSizes();

export const convertHeadingSizeToSize = (fontSize: Size | SizeHeadings): Size =>
  fontConfig.headingSizeMap[fontSize as SizeHeadings] || (fontSize as Size);

export const makeSize = (size: SizeProperties): string => {
  if (typeof size === "string") {
    const sanitizedSize = convertHeadingSizeToSize(size);
    return sizeMap.size[sanitizedSize][sizeConfig.sizeUnits];
  }
  if (typeof size === "object" && size.custom) {
    const ncus = createCustomSize(size.custom);
    return ncus;
  }
  return "NO DEFINITION PROVIDED";
};
