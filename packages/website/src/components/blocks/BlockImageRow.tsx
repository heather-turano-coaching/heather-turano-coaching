import { Container, RichText, SectionCopy, Title } from "@htc/components";
import { IBlockImageRow } from "@htc/contentful";
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
          margin-top: ${({ theme }) => theme.size.makeRem(64)};
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
                ${theme.breakpoints.tablet} {
                  width: 33.333%;
                }
              `}

              ${({ theme }) => css`
                ${theme.breakpoints.laptop} {
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
