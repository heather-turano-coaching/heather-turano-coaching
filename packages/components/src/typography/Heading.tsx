import React, { FC } from "react";

import { Primitive, DOM } from "@heather-turano-coaching/design-system";

import { TypColor } from "./TypColor";

import { HeadingSize, headingSizeMap } from "./_typography.types";
import "./Heading.module.scss";

export type HeadingProps = DOM.Heading & {
  size?: HeadingSize;
  color?: Primitive.Color;
  copy?: string | undefined;
};

export const Heading: FC<HeadingProps> = ({
  size = "h1",
  color = "grayscale",
  copy = undefined,
  children = undefined
}) => {
  const translatedSize = headingSizeMap[size];
  switch (size) {
    case "h1":
      return (
        <h1 styleName={translatedSize}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h1>
      );
    case "h2":
      return (
        <h2 styleName={translatedSize}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h2>
      );
    case "h3":
      return (
        <h3 styleName={translatedSize}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h3>
      );
    case "h4":
      return (
        <h4 styleName={translatedSize}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h4>
      );
    case "h5":
      return (
        <h4 styleName={translatedSize}>
          <TypColor color={color}>{copy || children}</TypColor>
        </h4>
      );
    default:
      return (
        <h1>
          <TypColor color={color}>{copy || children}</TypColor>
        </h1>
      );
  }
};
