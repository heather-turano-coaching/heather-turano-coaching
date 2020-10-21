import { CSSObject } from "styled-components";

type MakeFlex = (
  flexDirection: CSSObject["flexDirection"],
  justifyContent: CSSObject["justifyContent"],
  alignItems: CSSObject["alignItems"]
) => string;

export const makeFlex: MakeFlex = (
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start"
) => `
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;
