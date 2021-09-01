import { IBlockImageRow } from "@htc-website/lib/server/contentful";
import {
  Container,
  RichText,
  SectionCopy,
  Title,
  makeDesktopStyles,
  makeRem,
  makeTabletStyles
} from "@htc/components";
import React, { FC } from "react";
import { css } from "styled-components";

export const BlockImageRow: FC<IBlockImageRow> = ({ fields }) => {
  return (
    <Container
      css={css`
        text-align: center;
      `}
    >
      <Title size="lg">{fields.title}</Title>
      <SectionCopy>
        {!!fields.description && (
          <RichText
            richText={fields.description}
            copyProps={{
              variant: "body1"
            }}
          />
        )}
      </SectionCopy>
      <div
        css={css`
          margin-top: ${makeRem(64)};
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        {fields.images.map((img) => (
          <div
            key={img.sys.id}
            css={css`
              width: 50%;

              ${({ theme }) => css`
                ${makeTabletStyles(theme)} {
                  width: 33.333%;
                }
              `}

              ${({ theme }) => css`
                ${makeDesktopStyles(theme)} {
                  width: 20%;
                }
              `}
            `}
          >
            <img
              src={img.fields.file.url}
              alt={img.fields.title}
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
