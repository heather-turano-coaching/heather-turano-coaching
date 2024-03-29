import { makeColor } from "@htc/design-system";
import React, { FC } from "react";
import styled from "styled-components";

export const StyledLine = styled.div`
  border-top: 1px solid ${makeColor({ scalable: { color: "light", scale: 0 } })};
`;

export const Line: FC = () => <StyledLine />;
