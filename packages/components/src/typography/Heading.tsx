import React, { FC } from "react";

import { Color } from "@heather-turano-coaching/design-system/types/primitive";
import {
  Size__Headings,
  HTML__Heading
} from "@heather-turano-coaching/design-system/types/composite";

import { TypColor } from "./TypColor";

import "./Heading.module.scss";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5
} from "./_typography.styles";

export type HeadingProps = HTML__Heading & {
  size?: Size__Headings;
  color?: Color;
  copy?: string | undefined;
};

export const Heading: FC<HeadingProps> = ({
  size = "h1",
  color = "grayscale",
  copy = undefined,
  children = undefined
}) => {
  switch (size) {
    case "h1":
      return (
        <StyledH1>
          <TypColor color={color}>{copy || children}</TypColor>
        </StyledH1>
      );
    case "h2":
      return (
        <StyledH2>
          <TypColor color={color}>{copy || children}</TypColor>
        </StyledH2>
      );
    case "h3":
      return (
        <StyledH3>
          <TypColor color={color}>{copy || children}</TypColor>
        </StyledH3>
      );
    case "h4":
      return (
        <StyledH4>
          <TypColor color={color}>{copy || children}</TypColor>
        </StyledH4>
      );
    case "h5":
      return (
        <StyledH5>
          <TypColor color={color}>{copy || children}</TypColor>
        </StyledH5>
      );
    default:
      return (
        <StyledH1>
          <TypColor color={color}>{copy || children}</TypColor>
        </StyledH1>
      );
  }
};
