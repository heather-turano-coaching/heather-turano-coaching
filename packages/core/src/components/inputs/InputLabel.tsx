import React, { FC } from "react";
import styled from "styled-components";

import { makeOutset } from "../../design-system";
import { Typography } from "../display";
import { HTMLLabel } from "../types";

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
}) => (
  <>
    {label && (
      <StyledInputLabel htmlFor={htmlFor}>
        <Typography
          variant="label"
          fontSize="sm"
          fontColor={{
            scalable: {
              color: isValid ? "secondary" : "error"
            }
          }}
        >
          {label}
        </Typography>
      </StyledInputLabel>
    )}
  </>
);