import { ColorProperties } from "@heather-turano-coaching/design-system";
import {
  makeColor,
  makeOutset,
  makeSize,
} from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled, { css } from "styled-components";

const StyledCarousel = styled.div`
  position: relative;
`;

const CSSCarouselBubble = css<{
  isActive: boolean;
  activeColor: ColorProperties;
}>`
  height: ${makeSize("xs")};
  width: ${makeSize("xs")};
  background: ${({ isActive, activeColor }) =>
    isActive ? makeColor(activeColor) : "transparent"};
  border: 1px solid ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
  border-radius: 50%;
  transition: background 0.15s ease-in-out;
  z-index: 50;

  & + .bubble {
    margin-left: 20px;
  }
`;

const StyledCarouselBubble = styled.button.attrs({ type: "button" })<{
  isActive: boolean;
  activeColor: ColorProperties;
}>`
  ${CSSCarouselBubble};

  & + ${CSSCarouselBubble} {
    ${makeOutset({ left: 16 })};
  }
`;

const StyledCarouselFooter = styled.footer`
  ${makeOutset({ top: 24 })};
  text-align: center;
`;

export const Carousel: FC = ({ children }) => {
  return <StyledCarousel>{children}</StyledCarousel>;
};

export interface CarouselFooterProps {
  entries: any;
  goToEntry: (i: number) => void;
  currentEntry: number;
  activeColor: ColorProperties;
}

export const CarouselFooter: FC<CarouselFooterProps> = ({
  entries,
  currentEntry,
  goToEntry,
  activeColor,
}) => {
  const bubbles = entries.map((_: any, index: number) => (
    <StyledCarouselBubble
      isActive={index === currentEntry}
      key={index.toString()}
      onClick={() => goToEntry(index)}
      activeColor={activeColor}
    />
  ));
  return <StyledCarouselFooter>{bubbles}</StyledCarouselFooter>;
};
