import { makeRem } from "@heather-turano-coaching/core/theme";
import { Container, Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

import { navbarHeight } from "../navigation/HeaderNav";

export type HeroProps = {
  title: string;
  subTitle: string;
};

export const HeroContainer = styled(Container)`
  position: relative;
  height: 100% !important;
`;

export const HeroWrapper = styled.div`
  width: ${`calc(100% + ${makeRem(2)})`};
  min-height: ${`calc((100% + ${makeRem(2)}) - ${navbarHeight})`};
  height: ${`calc(100% - ${navbarHeight})`};
  position: relative;
  left: -${makeRem(1)};
  top: -${makeRem(1)};
  bottom: -${makeRem(1)};
  right: -${makeRem(1)};

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
