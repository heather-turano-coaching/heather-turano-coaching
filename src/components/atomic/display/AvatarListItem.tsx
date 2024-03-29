import { makeColor, makeInset, makeOutset, makeSize } from "@htc/design-system";
import { RandomColor } from "@htc/theme";
import React, { FC } from "react";
import styled from "styled-components";

import { Avatar, AvatarProps } from "./Avatar";
import { Typography } from "./Typography";

type AvatarListItemProps = Omit<AvatarProps, "size"> & {
  accentColor?: RandomColor;
  name: string;
  bio?: string | null;
};

const StyledAvatarListItem = styled.div<
  Required<Pick<AvatarListItemProps, "accentColor">>
>`
  position: relative;
  box-sizing: border-box;
  ${makeInset({ horizontal: 16, vertical: 8 })};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${makeColor({ fixed: "light" })};
  width: 100%;

  & * {
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${makeSize({ custom: 46 })};
    background: ${({ accentColor }) =>
      makeColor({ scalable: { color: accentColor, scale: 2 } })};
  }

  & > div {
    &:first-child {
      ${makeOutset({ right: 16 })};
    }
    &:last-child {
      flex: 1;
    }
  }
`;

export const AvatarListItem: FC<AvatarListItemProps> = ({
  accentColor = "primary",
  image,
  alt,
  name
  // bio
}) => (
  <StyledAvatarListItem accentColor={accentColor}>
    <div>
      <Avatar alt={alt} image={image} size={{ custom: 60 }} />
    </div>
    <div>
      <Typography variant="label" fontSize="sm">
        {name}
      </Typography>
      {/* {bio && (
        <Typography type="paragraph" fontSize="xs">
          {bio.length > 196 ? `${bio.substring(0, 196)} ...` : bio}
        </Typography>
      )} */}
    </div>
  </StyledAvatarListItem>
);
