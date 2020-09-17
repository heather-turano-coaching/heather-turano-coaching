import {
  Image,
  Typography,
  makeFlex,
  sharedHorizontalBodyPadding
} from "@heather-turano-coaching/components";
import { useBreakpoints, useSticky } from "@heather-turano-coaching/core/hooks";
import {
  makeColor,
  makeInset,
  makeReset,
  makeResponsive,
  makeSize
} from "@heather-turano-coaching/design-system";
import React, { FC, ReactNode, useRef } from "react";
import styled, { css } from "styled-components";

interface HeaderNavProps {
  homeRoute?: string;
  navItems: ReactNode;
  logos: {
    stacked: string;
    inline: string;
  };
}

export const headerNavVerticalPadding = 20;
export const maxNavWidth = makeSize({ custom: 1024 });

const StyledHeaderNav = styled.header`
  box-sizing: border-box;
  box-shadow: ${`0 1px 15px 0 ${makeColor({
    scalable: { color: "gray", scale: 3 }
  })}`};

  * {
    box-sizing: border-box;
  }
`;

const StyledLogo = styled.div`
  ${makeFlex("row", "center", "center")};
  height: ${makeSize({ custom: 160 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "space-between", "center")};
      height: initial;
    `
  })};

  & > a {
    ${makeFlex("row", "center", "center")};
    display: block;
    height: 100%;
    width: 100%;

    & > div {
      height: inherit;
    }
  }
`;

const StyledStickyWrapper = styled.div<{ wrapperHeight?: number }>`
  position: relative;
  flex: 1;

  ${({ wrapperHeight }) =>
    wrapperHeight &&
    css`
      height: ${makeSize({ custom: wrapperHeight })};
    `}
`;

const StyledNav = styled.nav<{ isSticky: boolean }>`
  width: 100%;
  ${makeInset({
    horizontal: sharedHorizontalBodyPadding.phone,
    vertical: headerNavVerticalPadding
  })};

  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      background: ${makeColor({ scalable: { color: "light", scale: 3 } })};
    `
  })}

  width: 100%;
  z-index: 10000000;
  transition: all 0.2s ease-in-out;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      flex: 1;
      ${makeFlex("row", "space-between", "center")};
      ${makeInset({
        horizontal: sharedHorizontalBodyPadding.tabletPortrait,
        vertical: headerNavVerticalPadding
      })};
    `
  })}

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: fixed;
      top: 0;
      background: ${makeColor({ fixed: "light" })} !important;
      box-shadow: ${`0 1px 15px 0 ${makeColor({
        scalable: { color: "gray", scale: 3 }
      })}`};
    `}
`;

const StyledNavList = styled.ul`
  ${makeReset("list")};
  ${makeFlex("row", "space-around", "center")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "flex-end", "center")};
      flex: 1;
    `
  })};
`;

const StyledNavContent = styled.div`
  max-width: ${maxNavWidth};
  margin: 0 auto;
  width: 100%;
  height: inherit;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeFlex("row", "space-between", "center")
  })};
`;

const CSSNavItemActive = css`
  p {
    color: ${makeColor({ scalable: { color: "primary" } })};
  }

  &::after {
    background: ${makeColor({ scalable: { color: "primary" } })};
  }
`;

const StyledNavListItem = styled.li<{ isActive: boolean }>`
  align-self: stretch;

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      &:not(:last-child) {
        ${makeInset({ right: 32 })};
      }
    `
  })};

  & > a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      right: 0;
      height: ${makeSize({ custom: 1 })};
      background: transparent;
    }

    & > p,
    &::after {
      transition: all 0.15s ease-in-out;
    }

    &:hover,
    &.active {
      ${CSSNavItemActive};
    }

    ${({ isActive }) => isActive && CSSNavItemActive};
  }
`;

// @ts-ignore
export const HeaderNavLink = StyledNavListItem;

export const HeaderNavLinkContent: FC = ({ children }) => {
  const [windowWidth, { phoneMd }] = useBreakpoints();

  return (
    <Typography
      variant="label"
      fontSize={windowWidth < phoneMd ? "xs" : "sm"}
      lineHeight="lg"
      fontColor={{ scalable: { color: "gray", scale: 0 } }}
    >
      {children}
    </Typography>
  );
};

type HeaderTopLogoProps = Omit<HeaderNavProps, "navItems">;

const HeaderTopLogo: FC<HeaderTopLogoProps> = ({
  homeRoute,
  logos: { stacked }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  return windowWidth < tabletPortrait ? (
    <StyledLogo>
      <a href={homeRoute}>
        <Image src={stacked} alt="htcLogo" manualWidth={160} />
      </a>
    </StyledLogo>
  ) : null;
};

type HeaderInlineLogoProps = Omit<HeaderNavProps, "navItems">;

const HeaderInlineLogo: FC<HeaderInlineLogoProps> = ({
  homeRoute,
  logos: { inline }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;
  return !isWindowMobile ? (
    <StyledLogo>
      <a href={homeRoute}>
        <Image src={inline} alt="htcLogo" manualWidth={200} />
      </a>
    </StyledLogo>
  ) : null;
};

export const HeaderNav: FC<HeaderNavProps> = ({ navItems, ...restProps }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const isSticky = useSticky<HTMLElement>({
    ref: wrapperRef,
    testId: "test"
  });

  return (
    <StyledHeaderNav>
      <HeaderTopLogo {...restProps} />
      <div ref={wrapperRef}>
        <StyledStickyWrapper wrapperHeight={targetRef.current?.offsetHeight}>
          <div ref={targetRef}>
            <StyledNav isSticky={isSticky}>
              <StyledNavContent>
                <HeaderInlineLogo {...restProps} />
                <StyledNavList>{navItems}</StyledNavList>
              </StyledNavContent>
            </StyledNav>
          </div>
        </StyledStickyWrapper>
      </div>
    </StyledHeaderNav>
  );
};
