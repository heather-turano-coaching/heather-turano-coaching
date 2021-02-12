import React, { FC } from "react";
import styled from "styled-components";

import { makeOutset } from "../../../../../src/design-system";
import { Typography } from "../display";

export interface InputErrorProps {
  errorMessage?: string;
}

const StyledInputError = styled.div`
  ${makeOutset({ top: 4 })}
`;

export const InputError: FC<InputErrorProps> = ({
  errorMessage = undefined
}) => (
  <>
    {errorMessage && (
      <StyledInputError>
        <Typography
          variant="label"
          fontSize="xs"
          fontColor={{ scalable: { color: "error" } }}
        >
          {errorMessage}
        </Typography>
      </StyledInputError>
    )}
  </>
);
