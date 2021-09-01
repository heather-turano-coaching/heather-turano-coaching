import { RichText } from "@htc/components";
import { IBlockGrabber } from "@htc/contentful";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { AweberForm } from "../AweberForm";
import { HeroTitle } from "../heros";
import { BlockContainer, BlockVertSpacing } from "../layout";

const TextCol = styled.div`
  max-width: ${({ theme }) => theme.size.makeRem(360)};
`;

const headerRowHeight = 200;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    margin-bottom: ${theme.size.makeRem(40)};
    ${theme.breakpoints.laptop(theme)} {
      height: ${theme.size.makeRem(headerRowHeight)};
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
          top: ${({ theme }) =>
            theme.size.makeRem(headerRowHeight + BlockVertSpacing)};
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
              ${theme.breakpoints.mobileOnly(theme)} {
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              ${theme.breakpoints.laptop(theme)} {
                justify-content: flex-end;
              }
            `}
          `}
        >
          <div
            css={css`
              ${({ theme }) => css`
                ${theme.breakpoints.laptop(theme)} {
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
                variant: "paragraph"
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
                ${theme.breakpoints.mobileOnly(theme)} {
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
