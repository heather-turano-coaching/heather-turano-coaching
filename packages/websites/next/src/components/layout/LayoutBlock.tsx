import { makeOutset } from "@heather-turano-coaching/core/design-system";
import React, { FC } from "react";
import styled from "styled-components";

import { gutter } from "./LayoutContainer";

interface LayoutBlockProps {}

const StyledLayoutBlock = styled.div<LayoutBlockProps>`
  width: 100%;
  ${makeOutset({ bottom: gutter })};
`;

export const LayoutBlock: FC<LayoutBlockProps> = ({ children }) => (
  <StyledLayoutBlock>{children}</StyledLayoutBlock>
);
