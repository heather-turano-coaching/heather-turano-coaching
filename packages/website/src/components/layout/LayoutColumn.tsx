import { makeOutset, makeResponsive, makeSize } from "@htc/components";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { gutter } from "./LayoutContainer";

interface LayoutColumnProps {
  colWidth?: number | string;
  flexOrder?: number;
}

const StyledLayoutColumn = styled.div<LayoutColumnProps>`
  display: block;
  width: 100%;
  order: ${({ flexOrder }) => flexOrder || "initial"};

  ${({ colWidth }) => {
    if (colWidth) {
      return css`
        ${makeResponsive({
          beginAt: "tabletLandscape",
          style: `
            width: ${
              typeof colWidth === "number"
                ? makeSize({ custom: colWidth })
                : colWidth
            };
          `
        })};
      `;
    }
    return css`
      flex: 1;
    `;
  }};

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      &:not(:first-child) {
        ${makeOutset({ left: gutter })};
      }
    `
  })}
`;

export const LayoutColumn: FC<LayoutColumnProps> = ({
  children,
  ...restProps
}) => <StyledLayoutColumn {...restProps}>{children}</StyledLayoutColumn>;
