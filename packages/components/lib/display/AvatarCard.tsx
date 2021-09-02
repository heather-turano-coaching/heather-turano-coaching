import { rgba } from "polished";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import {
  SizeProperties,
  SpaceProperties,
  makeColor,
  makeInset,
  makeOutset,
  makeRhythm,
  makeSize
} from "../design-system";
import { RandomColor, generateRandomColor } from "../theme";
import { Typography } from "../typography2";
import { Avatar } from "./Avatar";

interface AvatarCardProps {
  avatarImg?: string;
  authorName: string;
  bio?: string | null;
  featureImage?: string | null;
}

const headerHeight: SizeProperties = { custom: 120 };
const spacing: SpaceProperties = { custom: 32 };

const StyledAvatarCard = styled.article`
  position: relative;
  height: 100%;
  border-radius: ${makeSize({ custom: 4 })};
  overflow: hidden;
`;

const StyledAvatarHeader = styled.header<
  { headerColor: RandomColor } & Pick<AvatarCardProps, "featureImage">
>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: ${makeSize(headerHeight)};
  ${({ headerColor, featureImage }) =>
    featureImage
      ? css`
          background-size: cover;
          background-image: linear-gradient(
              ${rgba(makeColor({ scalable: { color: headerColor } }), 0.7)},
              ${rgba(makeColor({ scalable: { color: headerColor } }), 0.7)}
            ),
            url(${featureImage});
        `
      : css`
          background: ${makeColor({ scalable: { color: headerColor } })};
        `};
`;

const StyledAvatarSection = styled.div`
  ${makeInset({ vertical: spacing, horizontal: spacing })};
  background: ${makeColor({ fixed: "light" })};
  height: 100%;
  box-sizing: border-box;

  & > div:first-child {
    ${makeOutset({ bottom: spacing })};
  }

  p {
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })}
  }
`;

export const AvatarCard: FC<AvatarCardProps> = ({
  authorName,
  avatarImg,
  bio,
  featureImage
}) => {
  const randomColor = generateRandomColor();
  return (
    <StyledAvatarCard>
      <StyledAvatarHeader
        headerColor={randomColor}
        featureImage={featureImage}
      />
      <StyledAvatarSection>
        <Avatar image={avatarImg} alt={authorName} size={headerHeight} />
        <Typography variant="h3">{authorName}</Typography>
        <Typography variant="body1">{bio}</Typography>
      </StyledAvatarSection>
    </StyledAvatarCard>
  );
};
