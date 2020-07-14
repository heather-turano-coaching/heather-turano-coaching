import React, { FC } from "react";
import styled from "styled-components";

const StyledInputControl = styled.div`
  display: block;
`;

export const InputControl: FC = ({ children }) => (
  <StyledInputControl>{children}</StyledInputControl>
);
