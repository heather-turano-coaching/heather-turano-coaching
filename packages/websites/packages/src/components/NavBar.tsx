import { makeFlex } from "@heather-turano-coaching/core/components";
import { makeInset, makeSize } from "@heather-turano-coaching/core/design-system";
import React, { FC } from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  width: 100%;
  ${makeFlex("row", "space-between", "center")};
  ${makeInset({ horizontal: 16, vertical: 8 })};
  height: ${makeSize({ custom: 80 })};
`;

export const NavBar: FC = ({ children }) => (
  <StyledNavBar>{children}</StyledNavBar>
);
