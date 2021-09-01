import React, { FC } from "react";
import { css } from "styled-components";

import {
  HeroContainer,
  HeroProps,
  HeroSubTitle,
  HeroTitle,
  HeroWrapper
} from "./HeroContainer";

export const HeroPlain: FC<HeroProps> = ({ title, subTitle }) => (
  <HeroWrapper $disableFull>
    <HeroContainer $disableFull>
      <div
        css={css`
          ${({ theme }) => css`
            max-width: ${theme.size.makeRem(600)};
            padding: ${theme.size.makeRem(100)} 0;
          `}

          margin: 0 auto;
          text-align: center;
        `}
      >
        <HeroTitle>{title}</HeroTitle>
        <HeroSubTitle>{subTitle}</HeroSubTitle>
      </div>
    </HeroContainer>
  </HeroWrapper>
);
