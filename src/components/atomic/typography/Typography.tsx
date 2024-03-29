import {
  ColorProperties,
  FontProperties,
  makeFont,
  makeReset
} from "@htc/design-system";
import React, { FC } from "react";
import styled from "styled-components";

import { HTMLParagraph } from "../types";

export type TypographyProps = HTMLParagraph & {
  variant: "caption" | "text" | "label" | "paragraph";
  fontSize?: FontProperties["fontSize"];
  fontColor?: ColorProperties;
  lineHeight?: FontProperties["lineHeight"];
};

export const typVariantMap: {
  [key in TypographyProps["variant"]]: Pick<
    FontProperties,
    "fontWeight" | "fontFamily"
  >;
} = {
  paragraph: {
    fontFamily: "Muli",
    fontWeight: "regular"
  },
  caption: {
    fontFamily: "Muli",
    fontWeight: "bold"
  },
  text: {
    fontFamily: "Muli",
    fontWeight: "light"
  },
  label: {
    fontFamily: "Muli",
    fontWeight: "medium"
  }
};

const StyledTypography = styled.p<
  Omit<TypographyProps, "fontSize"> & { fontSize: FontProperties["fontSize"] }
>`
  ${makeReset("paragraph")};
  ${({ fontSize, fontColor, lineHeight, variant }) =>
    makeFont({
      fontFamily: typVariantMap[variant].fontFamily,
      fontWeight: typVariantMap[variant].fontWeight,
      fontSize,
      fontColor,
      lineHeight
    })};
`;

export const Typography: FC<TypographyProps> = ({
  variant,
  fontSize = "sm",
  fontColor = { scalable: { color: "gray" } },
  lineHeight,
  children = undefined
}) => (
  <StyledTypography
    variant={variant}
    fontSize={fontSize}
    fontColor={fontColor}
    lineHeight={lineHeight}
  >
    {children}
  </StyledTypography>
);
