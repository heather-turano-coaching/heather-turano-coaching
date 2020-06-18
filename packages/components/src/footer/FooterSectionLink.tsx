import { makeOutset } from "@heather-turano-coaching/design-system";
import React, { FC, ReactNode, memo } from "react";
import styled from "styled-components";

import { Typography } from "../typography";
import { fontColor } from "./static";

const StyledFooterSectionLink = styled.div`
  text-decoration: none !important;
  ${makeOutset({ bottom: 12 })};

  a {
    all: inherit;
    cursor: pointer;
  }
`;

export const FooterSectionLink: FC<{ children: ReactNode }> = memo(
  ({ children }) => (
    <StyledFooterSectionLink>
      <Typography fontSize="xs" fontColor={fontColor} variant="paragraph">
        {React.Children.map(children, (child) =>
          // @ts-ignore
          React.cloneElement(child)
        )}
      </Typography>
    </StyledFooterSectionLink>
  )
);
