import { makeFontWeight, makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import React, { FC } from "react";
import styled, { css } from "styled-components";

const StyledLinkCard = styled.a<{ important: boolean }>`
  display: block;
  padding: ${makeRem(20)} ${makeRem(16)};
  border-radius: ${makeRem(4)};
  box-shadow: 0 0 17px #cdd7d8;

  &:not(:first-child) {
    margin-top: ${makeRem(24)};
  }

  ${({ theme, important }) => css`
    background-color: ${important ? theme.palette.primary.dark : "#fff"};

    & > h4 {
      color: #fff;
      color: ${important ? "#fff" : theme.palette.primary.dark};
      margin: 0;
      font-size: ${makeRem(14)};
      font-family: "Muli";
      font-weight: ${makeFontWeight("extraBold")};

      & + * {
        margin-top: ${makeRem(8)};
        font-size: ${makeRem(12)};
        color: ${important
          ? theme.palette.primary.light
          : theme.palette.noir.dark};
      }
    }
  `}
`;

export const LinkCard: FC<{
  href: string;
  title: string;
  subTitle?: string;
  important?: boolean;
}> = ({ href, title, subTitle, important = false }) => {
  return (
    <Link href={href} passHref>
      <StyledLinkCard important={important}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{subTitle}</Typography>
      </StyledLinkCard>
    </Link>
  );
};
