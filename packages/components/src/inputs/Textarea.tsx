import React, { forwardRef } from "react";
import styled from "styled-components";

import { HTMLTextarea } from "../types";
import { CSSInputStyle } from "./Input";
import { InputControl } from "./InputControl";
import { InputError, InputErrorProps } from "./InputError";
import { InputLabel } from "./InputLabel";

export type TextareaProps = HTMLTextarea &
  InputErrorProps & {
    name: string;
    label?: string;
    isValid?: boolean;
  };

const StyledTextarea = styled.textarea<TextareaProps>`
  ${CSSInputStyle}
  max-width: 100%;
  min-width: 100%;
`;

export const Textarea = forwardRef<any, TextareaProps>(
  (
    {
      name,
      label = undefined,
      isValid = true,
      errorMessage = undefined,
      ...restProps
    },
    ref
  ) => (
    <InputControl>
      <InputLabel label={label} htmlFor={name} isValid={isValid} />
      <StyledTextarea
        id={name}
        name={name}
        isValid={isValid}
        {...restProps}
        ref={ref}
      />
      <InputError errorMessage={errorMessage} />
    </InputControl>
  )
);
