import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import {
  ColorProperties,
  ResponsiveBreakpoints,
  makeColor,
  makeInset,
  makeOutset,
  makeResponsive,
  makeSize,
  makeSpace
} from "../../design-system";

export interface SectionProps {
  styleType: "blank" | "layered";
  background?: ColorProperties;
}

type SpaceBreakpoints = Pick<ResponsiveBreakpoints, "phone" | "tabletPortrait">;

export const sectionVSpace: SpaceBreakpoints = {
  phone: 80,
  tabletPortrait: 100
};

export const sectionHSpace: SpaceBreakpoints = {
  phone: 32,
  tabletPortrait: 60
};

const CSSSectionMap: {
  [key in SectionProps["styleType"]]: SimpleInterpolation;
} = {
  blank: css`
    ${makeInset({
      vertical: sectionVSpace.phone,
      horizontal: sectionHSpace.phone
    })};

    ${makeResponsive<string>({
      beginAt: "tabletPortrait",
      style: makeInset({ vertical: sectionVSpace.tabletPortrait })
    })}
  `,
  layered: css`
    ${makeInset({
      vertical: sectionVSpace.phone,
      horizontal: sectionHSpace.phone
    })};

    ${makeResponsive<string>({
      beginAt: "tabletPortrait",
      style: makeInset({ vertical: sectionVSpace.tabletPortrait })
    })}

    ${makeResponsive({
      endAt: "laptop",
      style: `
        background: ${makeColor({ scalable: { color: "light", scale: 3 } })};
      `
    })}
  `
};

const CSSSectionContentMap: {
  [key in SectionProps["styleType"]]: SimpleInterpolation;
} = {
  blank: css``,
  layered: css`
    ${makeResponsive({
      beginAt: "laptop",
      style: `
        position: relative;
        margin-bottom: ${makeSpace(56)};
        background: ${makeColor({
          scalable: { color: "light", scale: 3 }
        })};

        & > * {
          background: ${makeColor({
            scalable: { color: "light", scale: 3 }
          })};
          ${makeInset({ vertical: 56, horizontal: 56 })};
        }

        &::after {
          content: "";
          position: absolute;
          height: 100%;
          width: ${makeSize({ custom: 700 })};
          right: -${makeSize({ custom: 56 })};
          bottom: -${makeSize({ custom: 56 })};
          background: ${makeColor({
            scalable: { color: "secondary", scale: 3 }
          })};
          z-index: -1;
        }
      `
    })}
  `
};

const StyledSection = styled.article<SectionProps>`
  ${({ styleType }) => CSSSectionMap[styleType]};

  ${({ background }) =>
    background &&
    css`
      background: ${makeColor(background)};
    `}
`;

const StyledSectionContent = styled.div<SectionProps>`
  position: relative;
  z-index: 10;

  ${makeResponsive<string>({
    beginAt: "tabletPortrait",
    style: `
      margin: 0 auto;
      max-width: ${makeSize({ custom: 700 })};
    `
  })}

  ${({ styleType }) => CSSSectionContentMap[styleType]};
`;

export const Section: FC<SectionProps> = ({
  styleType,
  children,
  background = undefined
}) => {
  return (
    <StyledSection styleType={styleType} background={background}>
      <StyledSectionContent styleType={styleType} background={background}>
        <div>{children}</div>
      </StyledSectionContent>
    </StyledSection>
  );
};

const StyledSectionCopy = styled.div`
  max-width: ${makeSize({ custom: 600 })};
  margin: 0 auto;
`;

export const SectionCopy: FC = ({ children }) => (
  <StyledSectionCopy>{children}</StyledSectionCopy>
);

const StyledSectionFooter = styled.div`
  ${makeOutset({ top: "xl", bottom: 0, horizontal: "auto" })}
`;
export const SectionFooter: FC = ({ children }) => (
  <StyledSectionFooter>{children}</StyledSectionFooter>
);
