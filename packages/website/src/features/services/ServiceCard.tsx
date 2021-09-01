import { CSSImageBorderSmall, ProgramContainer } from "@htc-website/components";
import { RichText, Typography } from "@htc/components";
import { IServiceFields } from "@htc/contentful";
import React, { FC } from "react";
import { css } from "styled-components";

export const ServiceCard: FC<Omit<IServiceFields, "type">> = ({
  children,
  ...restProps
}) => (
  <ProgramContainer>
    <div
      css={css`
        background: ${({ theme }) => theme.palette.common.white};
        box-shadow: 0 0 17px 11px rgba(218, 218, 218, 0.5);

        ${({ theme }) => css`
          border-radius: ${theme.size.makeRem(4)};
          padding: ${theme.size.makeRem(60)} ${theme.size.makeRem(40)};

          ${theme.breakpoints.mobileOnly} {
            flex-direction: column;
            padding: ${theme.size.makeRem(40)} ${theme.size.makeRem(32)};
          }

          ${theme.breakpoints.tablet} {
            display: flex;
            align-items: flex-start;
            padding: ${theme.size.makeRem(60)} ${theme.size.makeRem(40)};
          }
        `}

        * {
          justify-content: flex-start;
        }
      `}
    >
      <div
        css={css`
          & > img {
            width: 100%;
            ${CSSImageBorderSmall};
          }

          ${({ theme }) => css`
            width: ${theme.size.makeRem(320)};

            ${theme.breakpoints.mobileOnly} {
              width: 100%;
              margin-bottom: ${theme.size.makeRem(32)};
            }

            ${theme.breakpoints.laptop} {
              margin-right: ${theme.size.makeRem(40)};
              min-width: ${theme.size.makeRem(320)};
            }
          `}
        `}
      >
        <img
          src={restProps.image.fields.file.url}
          alt={restProps.image.fields.file.fileName}
        />
      </div>
      <div>
        <Typography
          variant="h4"
          css={css`
            text-transform: uppercase;
            margin-top: 0;
            margin-bottom: ${({ theme }) => theme.size.makeRem(8)};
          `}
        >
          {restProps.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          css={css`
            margin-bottom: ${({ theme }) => theme.size.makeRem(32)};
          `}
        >
          {restProps.subTitle}
        </Typography>
        <div
          css={css`
            & + * {
              margin-top: ${({ theme }) => theme.size.makeRem(32)};
            }
          `}
        >
          <RichText
            richText={restProps.description}
            copyProps={{
              variant: "body1"
            }}
          />
        </div>
        {children}
      </div>
    </div>
  </ProgramContainer>
);
