import { makeRem } from "@htc/theme";
import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

export type LinkCardSubTitleProps = { important: boolean };

const StyledLinkCardSubTitle = styled(Typography)<LinkCardSubTitleProps>`
  color: ${({ theme, important }) =>
    important ? theme.palette.primary.light : theme.palette.noir.dark};
  margin-top: ${makeRem(8)};
  font-size: ${makeRem(12)};
`;

export const LinkCardSubTitle: FC<LinkCardSubTitleProps> = ({
  important = false,
  children
}) => (
  <StyledLinkCardSubTitle variant="body1" important={important}>
    {children}
  </StyledLinkCardSubTitle>
);
