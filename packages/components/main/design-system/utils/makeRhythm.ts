import { Size } from "../types/primitive";
import { sizeMap } from "./makeSize";
import { makeOutset } from "./makeInsetOutset";

type RhythmScales = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface RhythmProperties {
  fontSize?: Size;
  top: RhythmScales;
  bottom: RhythmScales;
}

export const makeRhythm = ({
  fontSize = "sm",
  top,
  bottom
}: RhythmProperties): string => {
  const lineHeight = sizeMap.lineHeight[fontSize].raw;
  const intLineHeight = Number(lineHeight);
  return makeOutset({
    top: top * intLineHeight,
    bottom: bottom * intLineHeight
  });
};
