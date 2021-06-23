import {
  Layout,
  makeOutset,
  makeResponsive,
  makeSpace
} from "@htc/design-system";
import { sharedElementSpacing } from "@htc/theme";
import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

export interface FormGroupProps {
  layout?: Layout;
}

const CSSFormGroupMap: {
  [key in Layout]: SimpleInterpolation;
} = {
  stacked: css`
    & > * {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100%;

      &:not(:first-child) {
        ${makeOutset({ top: sharedElementSpacing })}
      }
    }
  `,
  "stacked-full": css``,
  inline: css`
    & > * {
      /* width: 100%; */

      & + * {
        ${makeOutset({ top: 16 })}
      }
    }

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        & > * {
          width: initial;

          & + * {
            margin-left: space(xxs);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left-width: ${makeSpace({ custom: 2 })};
            margin-top: 0;

            input {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              border-left-width: ${makeSpace({ custom: 2 })};
            }
          }

          &:not(:last-child) {
            flex: 1;

            input {
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
              border-right-width: ${makeSpace({ custom: 2 })};
            }
          }
        }
      `
    })}
  `,
  standalone: css``
};

const StyledFormGroup = styled.div<FormGroupProps>`
  ${({ layout = "stacked" }) => CSSFormGroupMap[layout]};
`;

export const FormGroup: FC<FormGroupProps> = ({
  layout = "stacked",
  children
}) => <StyledFormGroup layout={layout}>{children}</StyledFormGroup>;
