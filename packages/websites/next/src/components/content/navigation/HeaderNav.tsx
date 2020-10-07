import {
  makeDesktopStyles,
  makeFlex,
  makeMobileStyles,
  makeRem
} from "@heather-turano-coaching/core/theme";
import React, { FC, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { ActiveLink } from "./ActiveLink";

export const navbarHeight = makeRem(84);

const NavbarContainer = styled.nav`
  width: 100%;
  display: initial;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;

const MobileLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${makeRem(200)};

  img {
    width: ${makeRem(200)};
  }

  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      display: none;
    }
  `}
`;

const DesktopLogo = styled.div`
  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      display: none;
    }
  `}

  img {
    width: ${makeRem(200)};
  }
`;

const Navbar = styled.div`
  width: 100%;
  position: sticky;
  top: -${makeRem(1)};
  margin-top: ${makeRem(1)};

  padding: 0 ${makeRem(24)};
  z-index: 100;
  transition: all 0.2s ease-in-out 0s;

  &.stuck {
    box-shadow: rgb(209, 209, 209) 0px 1px 15px 0px;
  }

  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      background: ${theme.palette.light.light};

      &.stuck {
        background: ${theme.palette.common.white};
      }
    }

    ${makeDesktopStyles(theme)} {
      background: ${theme.palette.common.white};

      ${makeFlex({
        direction: "row",
        justify: "space-between",
        align: "center"
      })}
    }
  `}
`;

const NavbarUl = styled.ul`
  width: 100%;
  height: ${navbarHeight};
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      justify-content: space-between;
    }

    ${makeDesktopStyles(theme)} {
      justify-content: flex-end;
    }
  `}
`;

const NavbarLi = styled.li`
  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      &:not(:last-child) {
        margin-right: ${makeRem(32)};
      }
    }
  `}
`;

const NavLink = styled.a`
  height: ${makeRem(44)};
  line-height: ${makeRem(44)};
  display: block;
  font-family: "Muli";
  text-transform: uppercase;
  font-size: ${makeRem(16)};
  font-weight: 500;
  position: relative;
  transition: all 0.15s ease-in-out 0s;

  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      flex: 1;
    }
  `}

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${makeRem(1)};
    transition: all 0.15s ease-in-out 0s;
  }

  &.active {
    color: ${({ theme }) => theme.palette.secondary.dark};

    &::after {
      background: ${({ theme }) => theme.palette.secondary.dark};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const HeaderNav: FC = () => {
  const stickyRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(stickyRef.current);
  }, []);

  return (
    <NavbarContainer>
      <MobileLogo>
        <img src="/logo-stacked.png" alt="htc-logo-stacked" />
      </MobileLogo>
      <Navbar ref={stickyRef}>
        <DesktopLogo>
          <img src="/logo-inline.svg" alt="htc-logo-inline" />
        </DesktopLogo>
        <NavbarUl>
          <NavbarLi>
            <ActiveLink href="/">
              <NavLink>Home</NavLink>
            </ActiveLink>
          </NavbarLi>
          <NavbarLi>
            <ActiveLink href="/about">
              <NavLink>About</NavLink>
            </ActiveLink>
          </NavbarLi>
          <NavbarLi>
            <ActiveLink href="/services">
              <NavLink>Services</NavLink>
            </ActiveLink>
          </NavbarLi>
          <NavbarLi>
            <ActiveLink href="/events">
              <NavLink>Events</NavLink>
            </ActiveLink>
          </NavbarLi>
          <NavbarLi>
            <ActiveLink href="/blog" as="/blog">
              <NavLink>Blog</NavLink>
            </ActiveLink>
          </NavbarLi>
        </NavbarUl>
      </Navbar>
    </NavbarContainer>
  );
};
