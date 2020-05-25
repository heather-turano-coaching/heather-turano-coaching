import {
  makeColor,
  makeFont,
  makeInset,
  makeReset,
  makeSpace,
} from "@heather-turano-coaching/design-system";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import {
  shareButtonAndInputFontSize,
  sharedButtonAndInputVerticalPadding,
} from "../shared";
import { HTMLInput } from "../types";
import { Control, Error, ErrorProps, Label } from "./base";
import { TextareaProps } from "./Textarea";

export type InputProps = Partial<Omit<HTMLInput, "ref" | "type">> &
  ErrorProps & {
    name: string;
    label?: string;
    isValid?: boolean;
    type?: "text" | "email" | "password" | "search" | "number";
  };

export const CSSPlaceholders = css`
  &::placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &:placeholder-shown {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &::-webkit-input-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &::-moz-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &:-ms-input-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &:-moz-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
`;

export const CSSInputValidity = css<InputProps | TextareaProps>`
  ${({ isValid }) =>
    !isValid &&
    css`
      border-color: ${makeColor({ scalable: { color: "error" } })};
      color: ${makeColor({ scalable: { color: "error" } })};
    `}
`;

/**
 * This is done like this so we can share this base style with
 * the Textarea component
 */
export const CSSInputStyle = css<InputProps | TextareaProps>`
  box-sizing: border-box;
  ${CSSPlaceholders};
  ${makeReset("input")};
  ${makeInset({
    vertical: sharedButtonAndInputVerticalPadding,
    horizontal: 12,
  })};
  ${makeFont({ fontSize: shareButtonAndInputFontSize })};
  border: 1px solid ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  background: ${makeColor({ fixed: "light" })};
  color: ${makeColor({ fixed: "dark" })};
  border-radius: ${makeSpace({ custom: 2 })};
  width: 100%;
  ${CSSInputValidity};
`;

const StyledInput = styled.input<InputProps>`
  ${CSSInputStyle}
`;

export const Input = forwardRef<any, InputProps>(
  (
    {
      name,
      label = undefined,
      type = "text",
      isValid = true,
      errorMessage = undefined,
      ...restProps
    },
    ref
  ) => (
    <Control>
      <Label label={label} htmlFor={name} isValid={isValid} />
      <StyledInput
        id={name}
        name={name}
        type={type}
        isValid={isValid}
        ref={ref}
        {...restProps}
      />
      <Error errorMessage={errorMessage} />
    </Control>
  )
);
