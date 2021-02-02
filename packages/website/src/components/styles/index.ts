import { universalShadow } from "@heather-turano-coaching/core/components";
import { makeRem } from "@heather-turano-coaching/core/dist/src/theme";
import { css } from "styled-components";

export const universalHover = css`
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.01);

    box-shadow: ${universalShadow};
  }
`;

export const CSSImageBorder = css`
  outline: 1px solid #fff;
  outline-offset: -1.25rem;
`;

export const CSSImageBorderSmall = css`
  outline: 1px solid #fff;
  outline-offset: -${makeRem(12)};
`;
