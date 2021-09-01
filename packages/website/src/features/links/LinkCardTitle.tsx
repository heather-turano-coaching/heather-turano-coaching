import { Typography, makeFontWeight } from "@htc/components";
import React, { FC } from "react";
import styled from "styled-components";

export type LinkCardTitleProps = { important: boolean };

const StyledLinkCardTitle = styled(Typography)<LinkCardTitleProps>`
  color: #fff;
  color: ${({ theme, important }) =>
    important ? "#fff" : theme.palette.primary.dark};
  margin: 0;
  font-size: ${({ theme }) => theme.size.makeRem(16)};
  font-family: "Muli";
  font-weight: ${makeFontWeight("extraBold")};
`;

export const LinkCardTitle: FC<LinkCardTitleProps> = ({
  important = false,
  children
}) => (
  <StyledLinkCardTitle variant="h4" important={important}>
    {children}
  </StyledLinkCardTitle>
);
