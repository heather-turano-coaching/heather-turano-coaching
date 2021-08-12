import { makeDesktopStyles, makeMobileStyles, makeRem } from "@htc/theme";
import Link from "next/link";
import React, { FC, useEffect, useRef } from "react";
import { useMemo } from "react";
import styled, { css } from "styled-components";

import { ActiveLink } from "./ActiveLink";
import { SideNav } from "./SideNav";

export const navbarHeight = makeRem(84);
export const fullScreenSansNavbar = `calc(100vh - ${navbarHeight})`;

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

  ${({ theme }) => {
    return css`
      ${makeDesktopStyles(theme)} {
        display: none;
      }
    `;
  }}
`;

const DesktopLogo = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    z-index: 100;

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
  height: ${navbarHeight};

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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;

const NavbarUl = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;

  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      justify-content: space-between;
      height: 100%;
      padding: ${makeRem(16)};
    }

    ${makeDesktopStyles(theme)} {
      justify-content: center;
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

export const HeaderNav: FC<{ hideNavBar: boolean }> = ({ hideNavBar }) => {
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stickyRef.current) {
      const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
        { threshold: [1] }
      );

      observer.observe(stickyRef.current);
    }
  }, []);

  const Navigation = useMemo(
    () =>
      !hideNavBar && (
        <Navbar ref={stickyRef}>
          <Link href="/">
            <DesktopLogo>
              <img src="/logo-inline.svg" alt="htc-logo-inline" />
            </DesktopLogo>
          </Link>
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
          <SideNav />
        </Navbar>
      ),
    [hideNavBar]
  );

  return (
    <NavbarContainer>
      <MobileLogo>
        <img src="/logo-stacked.png" alt="htc-logo-stacked" />
      </MobileLogo>
      {Navigation}
    </NavbarContainer>
  );
};
