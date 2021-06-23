import { ColorProperties } from "@htc/design-system";
import { makeColor, makeResponsive, makeSize } from "@htc/design-system";
import { createImageBorder } from "@htc/theme";
import React, { FC } from "react";
import styled from "styled-components";

export interface HeroProps {
  image: string;
  alt: string;
  borderColor?: ColorProperties;
  gradient?: ColorProperties | undefined;
}

const defaultBorderColor: ColorProperties = { scalable: { color: "primary" } };

const StyledHero = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: ${makeSize({ custom: 400 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      min-height: ${makeSize({ custom: 450 })};
    `
  })}

  ${makeResponsive({
    beginAt: "desktop",
    style: `
      min-height: ${makeSize({ custom: 450 })};
    `
  })}
`;

const StyledHeroGradient = styled.div<
  Pick<HeroProps, "gradient" | "borderColor">
>`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  ${({ borderColor = defaultBorderColor }) => createImageBorder(borderColor)}
  background-image: ${({ gradient }) =>
    gradient
      ? `linear-gradient(270deg, transparent 42%, ${makeColor(gradient)} 80%)`
      : "transparent"};
`;

const StyledHeroImage = styled.img`
  box-sizing: border-box;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Hero: FC<HeroProps> = ({
  image,
  alt,
  children,
  borderColor = defaultBorderColor,
  gradient = undefined
}) => (
  <StyledHero>
    <StyledHeroImage src={image} alt={alt} />
    <StyledHeroGradient gradient={gradient} borderColor={borderColor} />
    {children}
  </StyledHero>
);
