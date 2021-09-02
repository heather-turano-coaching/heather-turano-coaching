import React, { FC } from "react";
import styled from "styled-components";

import { makeOutset } from "../design-system";
import { HTMLLabel } from "../types";
import { Typography } from "../typography2";

export type InputLabelProps = HTMLLabel & {
  label?: string;
  isValid?: boolean;
};

const StyledInputLabel = styled.label`
  display: inline-block;
  ${makeOutset({ bottom: 4 })}
`;

export const InputLabel: FC<InputLabelProps> = ({
  label = undefined,
  htmlFor,
  isValid = true
}) => {
  return (
    <>
      {label && (
        <StyledInputLabel htmlFor={htmlFor}>
          <Typography variant="body2" color={isValid ? "secondary" : "danger"}>
            {label}
          </Typography>
        </StyledInputLabel>
      )}
    </>
  );
};
