import { makeFontWeight, makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

export type LinkCardOverlineProps = { important: boolean };

const StyledLinkCardOverline = styled(Typography)<LinkCardOverlineProps>`
  color: #fff;
  color: ${({ theme, important }) =>
    important ? theme.palette.primary.light : theme.palette.secondary.dark};
  margin-bottom: ${makeRem(24)};
  font-size: ${makeRem(10)};
  font-family: "Muli";
  font-weight: ${makeFontWeight("extraBold")} !important;
  text-transform: uppercase;
  text-align: center;
`;

export const LinkCardOverline: FC<{ important: boolean }> = ({
  important = false,
  children
}) => (
  <StyledLinkCardOverline variant="body1" important={important}>
    {children}
  </StyledLinkCardOverline>
);
