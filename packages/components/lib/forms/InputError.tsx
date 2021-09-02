import React, { FC } from "react";
import styled from "styled-components";

import { makeOutset } from "../design-system";
import { Typography } from "../typography2";

export interface InputErrorProps {
  errorMessage?: string;
}

const StyledInputError = styled.div`
  ${makeOutset({ top: 4 })}
`;

export const InputError: FC<InputErrorProps> = ({
  errorMessage = undefined
}) => {
  return (
    <>
      {errorMessage && (
        <StyledInputError>
          <Typography variant="body2" color="danger">
            {errorMessage}
          </Typography>
        </StyledInputError>
      )}
    </>
  );
};
