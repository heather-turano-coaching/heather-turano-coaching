import React, { FC, ReactNode, memo } from "react";
import styled, { css } from "styled-components";

import { Typography } from "../typography2";
import { fontColor } from "./Footer.vars";

const StyledFooterText = styled.span`
  a {
    all: inherit;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const FooterText: FC<{ children: ReactNode }> = memo(
  function FooterText({ children }) {
    return (
      <Typography
        color={fontColor}
        variant="body2"
        css={css`
          margin-bottom: ${({ theme }) => theme.size.makeRem(12)};
        `}
      >
        <StyledFooterText>{children}</StyledFooterText>
      </Typography>
    );
  }
);
