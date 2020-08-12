import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ColorProperties,
  FontProperties
} from "@heather-turano-coaching/design-system";
import { makeColor, makeFont } from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled, { css } from "styled-components";

library.add(fal, fas, fab, fad, far);

export type IconProps = {
  icon: IconName;
  iconWeight?: "fab" | "fal" | "fas" | "fad" | "far" | undefined;
  iconSize?: FontProperties["fontSize"];
  iconColor?: ColorProperties;
  spin?: boolean;
};

const StyledIcon = styled.div<
  Required<Omit<IconProps, "icon" | "iconWeight" | "spin">>
>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ iconSize }) => css`
    height: ${makeFont({ fontSize: iconSize }).lineHeight};
    width: ${makeFont({ fontSize: iconSize }).lineHeight};
    font-size: ${makeFont({ fontSize: iconSize }).fontSize};
  `}

  & > svg {
    width: 100%;
    height: auto;

    path {
      ${({ iconColor }) => css`
        fill: ${makeColor(iconColor)};
      `}
    }
  }
`;

export const Icon: FC<IconProps> = ({
  icon,
  iconWeight = "fal",
  iconSize = "sm",
  iconColor = { scalable: { color: "gray" } },
  spin = false
}) => (
  <StyledIcon iconSize={iconSize} iconColor={iconColor}>
    <FontAwesomeIcon icon={[iconWeight, icon]} spin={spin} />
  </StyledIcon>
);
