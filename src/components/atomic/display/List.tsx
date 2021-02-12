import React, { FC } from "react";
import styled from "styled-components";

import { makeReset } from "../../../../../src/design-system";

const StyledList = styled.ul`
  ${makeReset("list")}
`;

export const List: FC = ({ children }) => <StyledList>{children}</StyledList>;
