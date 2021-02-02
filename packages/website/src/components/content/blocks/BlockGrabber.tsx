import {
  makeDesktopStyles,
  makeMobileStyles,
  makeRem
} from "@heather-turano-coaching/core/theme";
import { IBlockGrabber } from "@heather-turano-coaching/domain";
import { AweberForm, RichText } from "components/atomic";
import { BlockContainer, BlockVertSpacing } from "components/layout";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { HeroTitle } from "../heros";

const TextCol = styled.div`
  max-width: ${makeRem(360)};
`;

const headerRowHeight = 200;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${makeRem(40)};

  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      height: ${makeRem(headerRowHeight)};
    }
  `}
`;

export const BlockGrabber: FC<IBlockGrabber> = ({ fields }) => {
  const DesktopImage = (
    <img
      height={500}
      width={500}
      src={fields.image.fields.file.url}
      alt={fields.image.fields.file.fileName}
    />
  );
  const MobileImage = (
    <img
      height={360}
      width={360}
      src={fields.image.fields.file.url}
      alt={fields.image.fields.file.fileName}
    />
  );
  return (
    <div
      css={css`
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: ${makeRem(headerRowHeight + BlockVertSpacing)};
          bottom: 0;
          background: ${({ theme }) => theme.palette.accent.light};
          z-index: -1;
        }
      `}
    >
      <BlockContainer>
        <div
          css={css`
            display: flex;
            ${({ theme }) => css`
              ${makeMobileStyles(theme)} {
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              ${makeDesktopStyles(theme)} {
                justify-content: flex-end;
              }
            `}
          `}
        >
          <div
            css={css`
              ${({ theme }) => css`
                ${makeDesktopStyles(theme)} {
                  display: none;
                }
              `}
            `}
          >
            {MobileImage}
          </div>
          <TextCol>
            <HeaderRow>
              <HeroTitle>{fields.title}</HeroTitle>
            </HeaderRow>
            <RichText
              richText={fields.description}
              copyProps={{
                variant: "subtitle2"
              }}
            />
            <br />
            <br />
            <br />
            <AweberForm
              formScript={fields.form.fields.embeddedLink as string}
            />
          </TextCol>
          <div
            css={css`
              ${({ theme }) => css`
                ${makeMobileStyles(theme)} {
                  display: none;
                }
              `}
            `}
          >
            {DesktopImage}
          </div>
        </div>
      </BlockContainer>
    </div>
  );
};
