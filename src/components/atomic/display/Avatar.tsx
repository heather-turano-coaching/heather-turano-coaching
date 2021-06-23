import {
  FontProperties,
  SizeProperties,
  makeColor,
  makeSize
} from "@htc/design-system";
import { RandomColor, generateRandomColor } from "@htc/theme";
import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface AvatarProps {
  image?: string;
  alt: string;
  size?: SizeProperties;
}

const avatarSizeMap: {
  [key in Exclude<
    FontProperties["fontSize"],
    { custom: number }
  >]: FontProperties["fontSize"];
} = {
  h1: "h2",
  h2: "h3",
  h3: "h4",
  h4: "h5",
  h5: "xs",
  xxl: "xl",
  xl: "lg",
  lg: "md",
  md: "sm",
  sm: "xs",
  xs: "xxs",
  xxs: "xxs"
};

const StyledAvatar = styled.div.attrs({ className: "avatar" })<
  Required<Pick<AvatarProps, "size"> & { avatarColor: RandomColor }>
>`
  ${({ size }) => css`
    height: ${makeSize(size)};
    width: ${makeSize(size)};
  `}
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  div.this-should-have-a-svg-as-its-child {
    background: ${makeColor({
      scalable: { color: "gray", scale: 3 }
    })};
    svg {
      display: block;
      height: 100%;
      width: 100%;

      path {
        &:first-child {
          fill: ${makeColor({
            scalable: { color: "gray", scale: 3 }
          })};
        }
        &:last-child {
          fill: ${makeColor({
            scalable: { color: "light", scale: 0 }
          })};
        }
      }
    }
  }

  img,
  div.this-should-have-a-svg-as-its-child {
    border-radius: 50%;
    border: ${makeSize({ custom: 4 })} solid ${makeColor({ fixed: "light" })};
    z-index: 10;
    animation: fadein 0.25s;
    border-radius: 50%;
    object-fit: cover;
  }

  img {
    ${({ size }) => {
      if (typeof size === "string" && avatarSizeMap[size]) {
        return css`
          height: ${makeSize(avatarSizeMap[size])};
          width: ${makeSize(avatarSizeMap[size])};
        `;
      }
      return css`
        height: ${makeSize(size)};
        width: ${makeSize(size)};
        transform: scale(0.88);
      `;
    }};
  }

  div.this-should-have-a-svg-as-its-child {
    ${({ size }) => {
      if (typeof size === "string" && avatarSizeMap[size]) {
        return css`
          width: ${makeSize(avatarSizeMap[size])};
        `;
      }
      return css`
        width: ${makeSize(size)};
        transform: scale(0.88);
      `;
    }};
  }
`;

export const Avatar: FC<AvatarProps> = ({ image, alt, size = "h1" }) => {
  const color = generateRandomColor();

  return (
    <StyledAvatar size={size} avatarColor={color}>
      {image ? (
        <img src={image} alt={alt} />
      ) : (
        <div className="this-should-have-a-svg-as-its-child"></div>
      )}
    </StyledAvatar>
  );
};
