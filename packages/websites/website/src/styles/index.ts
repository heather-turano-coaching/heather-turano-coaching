import { css } from "styled-components";
import { universalShadow } from "@heather-turano-coaching/components";

export const universalHover = css`
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.01);

    box-shadow: ${universalShadow};
  }
`;
