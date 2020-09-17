import { makeSize, makeSpace } from "@heather-turano-coaching/design-system";
import styled, { css } from "styled-components";

const StyledPageContainer = styled.div<{ displayBackground?: boolean }>`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  ${({ displayBackground }) =>
    displayBackground &&
    css`
      background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 8%);
      background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 21%);
    `}

  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    background-repeat: no-repeat;
    background-size: 100%;
    height: ${makeSize({ custom: 2400 })};
    width: 100vw;
    z-index: 0;
    left: ${makeSpace({ custom: 408 })};
    top: ${makeSpace({ custom: 300 })};
    pointer-events: none;
  }
`;

export const PageContainer = StyledPageContainer;
