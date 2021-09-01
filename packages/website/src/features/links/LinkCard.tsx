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
  box-shadow: 0 0 17px #cdd7d8;

  ${({ theme, important, flushLeft, flushRight }) => css`
    padding-top: ${theme.size.makeRem(24)};
    padding-bottom: ${theme.size.makeRem(24)};
    border-radius: ${theme.size.makeRem(4)};

    &:not(:first-child) {
      margin-top: ${theme.size.makeRem(24)};
    }
    background-color: ${important ? theme.palette.primary.dark : "#fff"};
    padding-left: ${flushLeft ? 0 : theme.size.makeRem(16)};
    padding-right: ${flushRight ? 0 : theme.size.makeRem(16)};
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
    <Link href={href} passHref>
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
