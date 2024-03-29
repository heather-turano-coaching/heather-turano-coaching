import { ColorProperties } from "@htc/design-system";
import React, { FC } from "react";
import styled from "styled-components";

const StyledCarousel = styled.div`
  position: relative;
`;

export const Carousel: FC = ({ children }) => {
  return <StyledCarousel>{children}</StyledCarousel>;
};

export interface CarouselFooterProps {
  entries: unknown;
  goToEntry: (i: number) => void;
  currentEntry: number;
  activeColor: ColorProperties;
}
