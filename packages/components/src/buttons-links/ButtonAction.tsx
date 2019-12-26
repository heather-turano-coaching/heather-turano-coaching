import React, { FC } from "react";
import { IconName } from "@fortawesome/pro-light-svg-icons";
import { HTML__Button } from "@heather-turano-coaching/design-system/types/composite";
import { Size } from "@heather-turano-coaching/design-system/types/primitive";

import { Icon, Copy } from "../typography";

import "./ButtonAction.module.scss";

export type ButtonActionProps = HTML__Button & {
  label: string;
  size?: Size;
  icon?: IconName | undefined;
  iconWeight?: "fal" | "fab" | undefined;
};

export const ButtonAction: FC<ButtonActionProps> = ({
  label,
  size = "sm",
  icon = undefined,
  iconWeight = undefined,
  ...restButtonProps
}) => (
  <button styleName="link" type="button" {...restButtonProps}>
    {icon && <Icon icon={icon} iconWeight={iconWeight} size={size} />}
    <Copy type="caption" size={size}>
      {label}
    </Copy>
  </button>
);
