import { makeSize } from "@heather-turano-coaching/design-system";
import React, { FC, ReactNode, memo } from "react";
import styled from "styled-components";

import { Typography } from "../display";
import { fontColor } from "./Footer.vars";

const StyledFooterText = styled.span`
  a {
    all: inherit;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 700;
  }
`;

const typographyStyle: React.CSSProperties = {
  marginBottom: makeSize({ custom: 12 })
};

export const FooterText: FC<{ children: ReactNode }> = memo(({ children }) => (
  <Typography
    fontSize="xs"
    fontColor={fontColor}
    variant="paragraph"
    style={typographyStyle}
  >
    <StyledFooterText>{children}</StyledFooterText>
  </Typography>
));
