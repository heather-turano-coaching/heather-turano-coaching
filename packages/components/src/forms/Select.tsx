import React, { forwardRef } from "react";
import styled from "styled-components";

import { HTMLSelect } from "../types";
import { Control, Error, ErrorProps, Label } from "./base";
import { CSSInputStyle } from "./Input";

export type SelectProps = Partial<Omit<HTMLSelect, "ref" | "type">> &
  ErrorProps & {
    name: string;
    label?: string;
    isValid?: boolean;
  };

const StyledSelect = styled.select<SelectProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ${CSSInputStyle}
`;

export const Select = forwardRef<any, SelectProps>(
  (
    {
      name,
      label = undefined,
      isValid = true,
      errorMessage = undefined,
      children,
      ...restProps
    },
    ref
  ) => (
    <Control>
      <Label label={label} htmlFor={name} isValid={isValid} />
      <StyledSelect
        id={name}
        name={name}
        isValid={isValid}
        ref={ref}
        {...restProps}
      >
        {children}
      </StyledSelect>
      <Error errorMessage={errorMessage} />
    </Control>
  )
);
