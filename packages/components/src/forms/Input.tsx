import React, { FC } from "react";

import { Control, Label, Error, ErrorProps } from "./base";

import "./Input.module.scss";
import { DOM, Primitive } from "@heather-turano-coaching/design-system";

export type InputProps = DOM.Input &
  ErrorProps & {
    name: string;
    label?: string;
    styleType?: Primitive.InputStyleType;
    isValid?: boolean;
    type?: "text" | "email" | "password" | "search" | "number";
  };

export const Input: FC<InputProps> = ({
  name,
  label = undefined,
  type = "text",
  isValid = true,
  errorMessage = undefined,
  styleType = "primary",
  ...restProps
}) => (
  <Control>
    <Label label={label} htmlFor={name} isValid={isValid} />
    <input
      id={name}
      name={name}
      type={type}
      styleName={`input-${type} ${styleType} ${!isValid ? "invalid" : ""}`}
      {...restProps}
    />
    <Error errorMessage={errorMessage} />
  </Control>
);