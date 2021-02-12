import { IServiceFields } from "@htc/domain";
import { makeMobileStyles, makeRem, makeTabletStyles } from "@htc/theme";
import { Typography } from "@material-ui/core";
import { RichText } from "components/atomic";
import { ProgramContainer } from "components/layout";
import { CSSImageBorderSmall } from "components/styles";
import { FC } from "react";
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
        border-radius: ${makeRem(4)};
        padding: ${makeRem(60)} ${makeRem(40)};

        ${({ theme }) => css`
          ${makeMobileStyles(theme)} {
            padding: ${makeRem(40)} ${makeRem(32)};
          }

          ${makeTabletStyles(theme)} {
            display: flex;
            align-items: flex-start;
            padding: ${makeRem(60)} ${makeRem(40)};
          }
        `}

        * {
          justify-content: flex-start;
        }
      `}
    >
      <div
        css={css`
          width: ${makeRem(320)};
          min-width: ${makeRem(320)};
          margin-right: ${makeRem(40)};

          & > img {
            width: 100%;
            ${CSSImageBorderSmall};
          }

          ${({ theme }) => css`
            ${makeMobileStyles(theme)} {
              width: 100%;
              margin-bottom: ${makeRem(32)};
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
            margin-bottom: ${makeRem(8)};
          `}
        >
          {restProps.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          css={css`
            margin-bottom: ${makeRem(32)};
          `}
        >
          {restProps.subTitle}
        </Typography>
        <div
          css={css`
            & + * {
              margin-top: ${makeRem(32)};
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
