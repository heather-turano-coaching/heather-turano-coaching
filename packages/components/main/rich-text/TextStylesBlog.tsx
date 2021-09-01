import styled from "styled-components";

import { makeRem } from "../theme";
import { TextStyles } from "./TextStyles";

export const TextStylesBlog = styled(TextStyles)`
  margin: ${makeRem(16 * 7)} 0;
  font-family: "Muli";
  font-size: ${makeRem(16)};
  line-height: ${makeRem(16 * 2)};

  & > p {
    &:first-of-type {
      margin-top: ${makeRem(16 * 7)};

      &::first-letter {
        float: left;
        font-family: Georgia;
        font-size: ${makeRem(120)};
        line-height: ${makeRem(88)};
        margin-top: -${makeRem(32)};
        padding-right: ${makeRem(16)};
      }
    }
  }
`;
