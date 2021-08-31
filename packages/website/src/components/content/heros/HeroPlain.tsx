import { makeRem } from "@htc/theme";
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
          max-width: ${makeRem(600)};
          padding: ${makeRem(100)} 0;
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
