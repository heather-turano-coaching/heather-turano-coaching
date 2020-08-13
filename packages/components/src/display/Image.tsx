import {
  ColorProperties,
  SizeProperties
} from "@heather-turano-coaching/design-system";
import { makeColor, makeSize } from "@heather-turano-coaching/design-system";
import { rgba } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { makeFlex } from "../utils";

type CustomImageSizeValues = number | null;

interface ImageProps {
  src: string;
  alt: string;
  size?: SizeProperties | string;
  manualHeight?: CustomImageSizeValues | string;
  manualWidth?: CustomImageSizeValues | string;
  mask?: boolean;
  maskColor?: ColorProperties;
  maskOpacity?: number;
}

const StyledImageContainer = styled.div<
  Pick<ImageProps, "manualHeight" | "manualWidth"> &
    Required<Pick<ImageProps, "size">>
>`
  ${makeFlex("row", "center", "center")};
  position: relative;

  & > img {
    ${({ manualHeight, manualWidth, size }) => {
      if (manualWidth) {
        return css`
          height: auto;
          width: ${typeof manualWidth === "string"
            ? manualWidth
            : makeSize({ custom: manualWidth })};
        `;
      }
      if (manualHeight) {
        return css`
          height: ${typeof manualHeight === "string"
            ? manualHeight
            : makeSize({ custom: manualHeight })};
          width: auto;
        `;
      }
      return css`
        height: ${typeof size === "string" ? size : makeSize(size)};
        width: auto;
      `;
    }}
  }
`;

const StyledImageMask = styled.div<{
  maskColor: ColorProperties;
  maskOpacity: number;
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ maskColor, maskOpacity }) =>
    rgba(makeColor(maskColor), maskOpacity)};
`;

export const Image: FC<ImageProps> = ({
  src,
  alt,
  size = "sm",
  manualHeight = null,
  manualWidth = null,
  mask = false,
  maskColor = { scalable: { color: "secondary", scale: 0 } },
  maskOpacity = 0.5,
  ...restProps
}) => (
  <StyledImageContainer
    className="image"
    size={size}
    manualHeight={manualHeight}
    manualWidth={manualWidth}
  >
    {mask && (
      <StyledImageMask maskColor={maskColor} maskOpacity={maskOpacity} />
    )}
    <img src={src} alt={alt} {...restProps} />
  </StyledImageContainer>
);
