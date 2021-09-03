import { FC } from "react";
import React from "react";
import styled, { css } from "styled-components";

import { ColorKeys, ColorVariants } from "../theme/theme.config.palette";

export type SVGIconProps = {
  color?: ColorKeys | "inherit";
  variant?: ColorVariants;
};

const StyledSVGIcon = styled.svg<Required<SVGIconProps>>`
  ${({ theme, color = "gray", variant }) => css`
    color: ${color === "inherit" ? "inherit" : theme.palette[color][variant]};
  `}
`;

export const SvgIcon: FC<SVGIconProps> = ({
  color = "gray",
  variant = "main",
  children
}) => {
  return (
    <StyledSVGIcon viewBox="0 0 24 24" color={color} variant={variant}>
      {children}
    </StyledSVGIcon>
  );
};
