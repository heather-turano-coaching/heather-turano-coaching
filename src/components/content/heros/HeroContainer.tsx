import { makeRem } from "@htc/theme";
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
  width: ${`calc(100% + ${makeRem(2)})`};

  position: relative;
  left: -${makeRem(1)};
  top: -${makeRem(1)};
  bottom: -${makeRem(1)};
  right: -${makeRem(1)};
  box-sizing: border-box;
  display: flex;
  align-items: center;

  ${({ $disableFull }) =>
    !$disableFull &&
    css`
      min-height: ${`calc((100vh + ${makeRem(2)}) - ${navbarHeight})`};
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
