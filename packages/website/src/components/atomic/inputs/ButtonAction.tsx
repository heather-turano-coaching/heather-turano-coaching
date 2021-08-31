import {
  ColorProperties,
  FontProperties,
  makeOutset,
  makeReset
} from "@htc/design-system";
import React, { FC } from "react";
import styled from "styled-components";

import { Typography } from "../display";
import { HTMLButton } from "..";

type ButtonActionProps = HTMLButton & {
  label?: string;
  buttonSize?: FontProperties["fontSize"];
  buttonColor?: ColorProperties;
  hoverColor?: ColorProperties;
};

const StyledButtonAction = styled.button`
  ${makeReset("button")};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  /* & > p {
    ${makeOutset({ right: 4 })}
  } */

  div + p {
    ${makeOutset({ right: 4 })}
  }
`;

export const ButtonAction: FC<ButtonActionProps> = ({
  label,
  buttonSize = "sm",
  buttonColor = { scalable: { color: "accent" } },
  ...restButtonProps
}) => (
  <StyledButtonAction {...restButtonProps}>
    {label && (
      <Typography variant="label" fontSize={buttonSize} fontColor={buttonColor}>
        {label}
      </Typography>
    )}
  </StyledButtonAction>
);
