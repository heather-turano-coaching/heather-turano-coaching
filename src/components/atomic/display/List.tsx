import { makeReset } from "@htc/design-system";
import React, { FC } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  ${makeReset("list")}
`;

export const List: FC = ({ children }) => <StyledList>{children}</StyledList>;
