import { Color } from "../../../../../src/design-system";

export type RandomColor = Extract<Color, "primary" | "secondary" | "accent">;

const possibleColor: [RandomColor, RandomColor, RandomColor] = [
  "primary",
  "secondary",
  "accent"
];

export const generateRandomColor = () => {
  const randomInt = (Math.random() * 3) | 0;
  return possibleColor[randomInt];
};
