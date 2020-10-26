import React, { FC } from "react";
import styled from "styled-components";

import { makeColor } from "../../design-system";

export const StyledLine = styled.div`
  border-top: 1px solid ${makeColor({ scalable: { color: "light", scale: 0 } })};
`;

export const Line: FC = () => <StyledLine />;
