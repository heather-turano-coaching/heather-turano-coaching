import React, { FC } from "react";
import styled from "styled-components";

import { makeInset, makeResponsive, makeSize } from "../../design-system";

const StyledContainer = styled.div`
  ${makeInset({ horizontal: 30 })};

  ${makeResponsive({
    beginAt: "phoneMd",
    style: makeInset({ horizontal: 40 })
  })};

  ${makeResponsive({
    beginAt: "phoneLg",
    style: makeInset({ horizontal: 50 })
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeInset({ horizontal: 60 })
  })};

  ${makeResponsive({
    beginAt: "desktop",
    style: `
      max-width: ${makeSize({ custom: 1024 })};
      margin: 0 auto;
    `
  })};
`;

export const Container: FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
