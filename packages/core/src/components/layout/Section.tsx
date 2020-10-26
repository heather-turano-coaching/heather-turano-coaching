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
import { useBreakpoints } from "../../hooks";
import { makeFlex } from "../utils";

export interface SectionProps {
  styleType:
    | "blank"
    | "layered"
    | "hero"
    | "blog"
    | "featured-blog"
    | "split"
    | "blog-page";
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
  `,
  hero: css`
    ${makeInset({ vertical: 88, horizontal: 64 })};
  `,
  blog: css`
    ${makeInset({ vertical: 48, horizontal: 32 })};
  `,
  "featured-blog": css`
    ${makeInset({ vertical: 180, bottom: 48, horizontal: 32 })};

    ${makeResponsive({
      endAt: "laptop",
      style: makeInset({ top: 160, bottom: 48, horizontal: 32 })
    })}
  `,
  "blog-page": css`
    ${makeInset({
      top: 0,
      bottom: sectionVSpace.phone,
      horizontal: sectionHSpace.phone
    })};
  `,
  split: css`
    background: ${makeColor({ fixed: "light" })};

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
        ${makeFlex("row", "center", "center")};
        max-width: 100%;
        width: 100%;
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
  `,
  hero: css``,
  blog: css`
    max-width: ${makeSize({ custom: 800 })} !important;
  `,
  "featured-blog": css`
    max-width: ${makeSize({ custom: 800 })} !important;
  `,
  "blog-page": css`
    max-width: ${makeSize({ custom: 680 })};
  `,
  split: css`
    ${makeInset({ top: sectionVSpace.phone })};

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
        ${makeInset({ top: sectionVSpace.tabletPortrait })};
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
  const [windowWidth, { phoneLg }] = useBreakpoints();

  return (
    <StyledSection styleType={styleType} background={background}>
      {styleType !== "split" || windowWidth < phoneLg ? (
        <StyledSectionContent styleType={styleType} background={background}>
          <div>{children}</div>
        </StyledSectionContent>
      ) : (
        children
      )}
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

interface SectionSplitPaneProps {
  background: ColorProperties;
  spaceType?: "flush" | "padded";
}

const StyledSectionSplitPane = styled.div<SectionSplitPaneProps>`
  background: ${({ background }) => makeColor(background)};
  flex: 1;
  align-self: stretch;

  ${({ spaceType = "padded" }) => {
    if (spaceType === "flush") {
      return css``;
    }
    return css`
      ${makeInset({
        bottom: sectionVSpace.phone,
        horizontal: sectionHSpace.phone
      })};

      ${makeResponsive({
        beginAt: "phoneLg",
        style: `
          ${makeInset({
            vertical: sectionVSpace.tabletPortrait,
            horizontal: sectionHSpace.tabletPortrait
          })};
        `
      })}
    `;
  }}
`;

export const SectionSplitPane: FC<SectionSplitPaneProps> = ({
  children,
  ...restProps
}) => (
  <StyledSectionSplitPane {...restProps}>{children}</StyledSectionSplitPane>
);

const StyledSectionSpacer = styled.div`
  height: ${makeSize({ custom: sectionVSpace.phone })};
`;

export const SectionSpacer: FC = () => <StyledSectionSpacer />;
