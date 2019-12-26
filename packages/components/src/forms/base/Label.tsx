import React, { FC } from "react";
import { HTML__Label } from "@heather-turano-coaching/design-system/types/composite";

import { Copy } from "../../typography";
import "./Label.module.scss";

export type LabelProps = HTML__Label & {
  label?: string;
  isValid?: boolean;
};

export const Label: FC<LabelProps> = ({
  label = undefined,
  htmlFor,
  isValid = true
}) => (
  <>
    {label && (
      <label htmlFor={htmlFor} styleName="input-label">
        <Copy type="label" size="sm" color={isValid ? "secondary" : "error"}>
          {label}
        </Copy>
      </label>
    )}
  </>
);
