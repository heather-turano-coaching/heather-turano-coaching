import { makeSize } from "@heather-turano-coaching/design-system";
import React, { FC, ReactNode, memo } from "react";
import styled from "styled-components";

import { Typography } from "../typography";
import { fontColor } from "./static";

const StyledFooterText = styled.span`
  a {
    all: inherit;
    cursor: pointer;
  }
`;

const typographyStyle: React.CSSProperties = {
  marginBottom: makeSize({ custom: 12 }),
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
