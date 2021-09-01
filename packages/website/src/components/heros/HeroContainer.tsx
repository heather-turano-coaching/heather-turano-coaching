import { theme.size.makeRem } from "@htc-website/components";
import { Container, Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { navbarHeight } from "../navigation/HeaderNav";

export type HeroProps = {
  title: string;
  subTitle?: string;
  image?: string;
  imageAlt?: string;
};

export const HeroContainer = styled(Container)<{ $disableFull?: boolean }>`
  position: relative;

  ${({ $disableFull }) =>
    !$disableFull &&
    css`
      align-self: stretch;
    `}
`;

export const HeroWrapper = styled.div<{ $disableFull?: boolean }>`
  width: ${`calc(100% + ${theme.size.makeRem(2)})`};

  position: relative;
  left: -${theme.size.makeRem(1)};
  top: -${theme.size.makeRem(1)};
  bottom: -${theme.size.makeRem(1)};
  right: -${theme.size.makeRem(1)};
  box-sizing: border-box;
  display: flex;
  align-items: center;

  ${({ $disableFull }) =>
    !$disableFull &&
    css`
      min-height: ${`calc((100vh + ${theme.size.makeRem(2)}) - ${navbarHeight})`};
    `}

  & * {
    box-sizing: border-box;
  }
`;

export const HeroTitle: FC = ({ children }) => (
  <Typography variant="h1" color="inherit">
    {children}
  </Typography>
);

export const HeroSubTitle: FC = ({ children }) => (
  <Typography variant="subtitle1" component="h2">
    {children}
  </Typography>
);
