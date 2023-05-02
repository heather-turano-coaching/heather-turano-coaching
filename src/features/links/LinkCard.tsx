import { makeRem } from "@htc/theme";
import Link from "next/link";
import React, { FC } from "react";
import styled, { css } from "styled-components";

export type LinkCardProps = {
  href: string;
  important?: boolean;
  flushLeft?: boolean;
  flushRight?: boolean;
};

const StyledLinkCard = styled.a<Omit<LinkCardProps, "href">>`
  display: block;
  padding-top: ${makeRem(24)};
  padding-bottom: ${makeRem(24)};
  border-radius: ${makeRem(4)};
  box-shadow: 0 0 17px #cdd7d8;

  &:not(:first-child) {
    margin-top: ${makeRem(24)};
  }

  ${({ theme, important, flushLeft, flushRight }) => css`
    background-color: ${important ? theme.palette.primary.dark : "#fff"};
    padding-left: ${flushLeft ? 0 : makeRem(16)};
    padding-right: ${flushRight ? 0 : makeRem(16)};
  `}
`;

export const LinkCard: FC<LinkCardProps> = ({
  href,
  important = false,
  children,
  flushLeft = false,
  flushRight = false
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLinkCard
        important={important}
        flushLeft={flushLeft}
        flushRight={flushRight}
      >
        {children}
      </StyledLinkCard>
    </Link>
  );
};
