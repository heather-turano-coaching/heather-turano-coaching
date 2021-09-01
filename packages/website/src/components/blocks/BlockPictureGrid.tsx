import { makeDesktopStyles, makeRem } from "@htc-website/components";
import { IBlockPictureGrid } from "@htc-website/lib/server/contentful";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { BlockSimple } from "./BlockSimple";

const StyledGrid = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-self: stretch;
`;

const StyledGridImage = styled.div`
  width: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & > .image {
    max-width: 100%;
    max-height: 100%;
    transform: scale(1.5);
  }
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      & > .image {
        height: 100%;

        & > img {
          height: 100%;
        }
      }
    }
  `}
`;

export const BlockPictureGrid: FC<IBlockPictureGrid> = ({
  fields: { block, images }
}) => {
  return (
    <div
      css={css`
        width: 100%;
        * {
          box-sizing: border-box;
        }
        ${({ theme }) => css`
          ${makeDesktopStyles(theme)} {
            display: flex;
          }
        `}
      `}
    >
      <div
        css={css`
          flex: 1;

          ${({ theme }) => css`
            ${makeDesktopStyles(theme)} {
              padding: 0 ${makeRem(40)};
              order: 2;
            }

            & > * {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
          `}
        `}
      >
        <BlockSimple {...block} />
      </div>
      <StyledGrid>
        {images.map((clientImage) => (
          <StyledGridImage key={clientImage.fields.file.url}>
            <img
              src={clientImage.fields.file.url}
              alt={clientImage.fields.file.fileName}
            />
          </StyledGridImage>
        ))}
      </StyledGrid>
    </div>
  );
};
