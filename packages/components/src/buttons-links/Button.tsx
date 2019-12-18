import React, { FC } from "react";

import {
  Primitive,
  DOM,
  makeSize,
  makeColor
} from "@heather-turano-coaching/design-system";

import { Icon, Copy } from "../typography";

import "./Button.module.scss";

export type ButtonProps = DOM.Button & {
  label: string;
  styleType?: Primitive.Color;
  loading?: boolean;
};

console.log(makeSize({ size: "sm" }));
console.log(makeColor({ type: "scalable", color: "primary" }));

export const Button: FC<ButtonProps> = ({
  label,
  styleType = "primary",
  loading = false,
  ...restProps
}) => (
  <button
    styleName={styleType}
    disabled={restProps.disabled || loading}
    {...restProps}
  >
    {loading ? (
      <Icon size="md" icon="spinner" spin />
    ) : (
      <Copy type="paragraph" size="md">
        {label}
      </Copy>
    )}
  </button>
);
