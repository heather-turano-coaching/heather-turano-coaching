import { TextStyles } from "@htc/components";
import styled, { css } from "styled-components";

export const TextStylesBlog = styled(TextStyles)`
  ${({ theme }) => css`
    margin: ${theme.size.makeRem(16 * 7)} 0;
    font-family: "Muli";
    font-size: ${theme.size.makeRem(16)};
    line-height: ${theme.size.makeRem(16 * 2)};

    & > p {
      &:first-of-type {
        margin-top: ${theme.size.makeRem(16 * 7)};

        &::first-letter {
          float: left;
          font-family: Georgia;
          font-size: ${theme.size.makeRem(120)};
          line-height: ${theme.size.makeRem(88)};
          margin-top: -${theme.size.makeRem(32)};
          padding-right: ${theme.size.makeRem(16)};
        }
      }
    }
  `}
`;
