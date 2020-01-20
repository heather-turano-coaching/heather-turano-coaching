import React, { FC } from "react";
import styled, { css } from "styled-components";
import {
  SizeHeadings,
  HTMLHeading,
  ColorProperties,
  FontProperties
} from "@heather-turano-coaching/design-system/types/composite";
import {
  makeReset,
  makeFont
} from "@heather-turano-coaching/design-system/utils";

export type HeadingProps = HTMLHeading & {
  fontSize?: SizeHeadings;
  fontColor?: ColorProperties;
  fontFamily?: FontProperties["fontFamily"];
  copy?: string | undefined;
};

const BaseHeading = css`
  ${makeReset("heading")};
`;

const defaultFontColor: ColorProperties = {
  scalable: {
    color: "gray",
    scale: 0
  }
};

type HeadingStyleProps = Pick<HeadingProps, "fontColor" | "fontFamily">;

export const CSSH1 = css<HeadingStyleProps>`
  ${({ fontColor = defaultFontColor, fontFamily = "Montserrat" }) =>
    makeFont({ fontSize: "h1", fontFamily, fontColor })}
`;

export const CSSH2 = css<HeadingStyleProps>`
  ${({ fontColor = defaultFontColor, fontFamily = "Montserrat" }) =>
    makeFont({ fontSize: "h2", fontFamily, fontColor })};
`;
export const CSSH3 = css<HeadingStyleProps>`
  ${({ fontColor = defaultFontColor, fontFamily = "Montserrat" }) =>
    makeFont({ fontSize: "h3", fontFamily, fontColor })};
`;
export const CSSH4 = css<HeadingStyleProps>`
  ${({ fontColor = defaultFontColor, fontFamily = "Montserrat" }) =>
    makeFont({ fontSize: "h4", fontFamily, fontColor })};
`;
export const CSSH5 = css<HeadingStyleProps>`
  ${({ fontColor = defaultFontColor, fontFamily = "Raleway" }) =>
    makeFont({ fontSize: "h5", fontFamily, fontColor })};
`;

export const StyledH1 = styled.h1<HeadingStyleProps>`
  ${BaseHeading};
  ${CSSH1}
`;

export const StyledH2 = styled.h2<HeadingStyleProps>`
  ${BaseHeading};
  ${CSSH2}
`;

export const StyledH3 = styled.h3<HeadingStyleProps>`
  ${BaseHeading};
  ${CSSH3}
`;

export const StyledH4 = styled.h4<HeadingStyleProps>`
  ${BaseHeading};
  ${CSSH4}
`;

export const StyledH5 = styled.h5<HeadingStyleProps>`
  ${BaseHeading};
  ${CSSH5}
`;

export const Heading: FC<HeadingProps> = ({
  fontSize = "h1",
  fontColor = { scalable: { color: "gray" } },
  fontFamily,
  copy = undefined,
  children = undefined
}) => {
  switch (fontSize) {
    case "h1":
      return (
        <StyledH1 fontColor={fontColor} fontFamily={fontFamily}>
          {copy || children}
        </StyledH1>
      );
    case "h2":
      return (
        <StyledH2 fontColor={fontColor} fontFamily={fontFamily}>
          {copy || children}
        </StyledH2>
      );
    case "h3":
      return (
        <StyledH3 fontColor={fontColor} fontFamily={fontFamily}>
          {copy || children}
        </StyledH3>
      );
    case "h4":
      return (
        <StyledH4 fontColor={fontColor} fontFamily={fontFamily}>
          {copy || children}
        </StyledH4>
      );
    case "h5":
      return (
        <StyledH5 fontColor={fontColor} fontFamily={fontFamily}>
          {copy || children}
        </StyledH5>
      );
    default:
      return (
        <StyledH1 fontColor={fontColor} fontFamily={fontFamily}>
          {copy || children}
        </StyledH1>
      );
  }
};
