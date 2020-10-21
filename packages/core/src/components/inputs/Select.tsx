import React, { forwardRef } from "react";
import styled from "styled-components";

import { HTMLSelect } from "../types";
import { CSSInputStyle } from "./Input";
import { InputControl } from "./InputControl";
import { InputError, InputErrorProps } from "./InputError";
import { InputLabel } from "./InputLabel";

export type SelectProps = Partial<Omit<HTMLSelect, "ref" | "type">> &
  InputErrorProps & {
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
    <InputControl>
      <InputLabel label={label} htmlFor={name} isValid={isValid} />
      <StyledSelect
        id={name}
        name={name}
        isValid={isValid}
        ref={ref}
        {...restProps}
      >
        {children}
      </StyledSelect>
      <InputError errorMessage={errorMessage} />
    </InputControl>
  )
);
