import { SectionCopy, SectionFooter, Title } from "@htc-website/components";
import { RichText } from "@htc-website/components";
import {
  theme.breakpoints.laptop,
  theme.breakpoints.mobileOnly,
  theme.size.makeRem
} from "@htc-website/components";
import { IBlock, IBlockFields } from "@htc-website/lib/server/contentful";
import { Container, Typography } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

import { Actions } from "../actions";
import { Forms } from "../forms";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const typeMap: { [key in IBlockFields["type"]]: SectionProps["styleType"] } = {
//   plain: "blank",
//   stacked: "layered"
// };

export const BlockSimpleVariant = styled(Container)<{
  variant: IBlockFields["type"];
}>`
  max-width: ${theme.size.makeRem(700)};

  ${({ theme, variant }) => {
    switch (variant) {
      case "plain":
        return css`
          ${theme.breakpoints.mobileOnly(theme)} {
            margin-top: ${theme.size.makeRem(120)};
            margin-bottom: ${theme.size.makeRem(120)};
          }
          ${theme.breakpoints.laptop(theme)} {
            padding-top: ${theme.size.makeRem(160)};
            padding-bottom: ${theme.size.makeRem(160)};
          }
        `;

      case "stacked":
        return css`
          margin-top: ${theme.size.makeRem(200)};
          margin-bottom: ${theme.size.makeRem(200)};
          padding-top: ${theme.size.makeRem(60)};
          padding-bottom: ${theme.size.makeRem(60)};
          background-color: ${theme.palette.light.light};
          position: relative;

          ${theme.breakpoints.laptop(theme)} {
            padding: ${theme.size.makeRem(60)};

            &::after {
              content: "";
              position: absolute;
              height: 100%;
              width: 100%;
              right: -${theme.size.makeRem(56)};
              bottom: -${theme.size.makeRem(56)};
              background: ${theme.palette.primary.light};
              z-index: -1;
            }
          }
        `;
    }
  }}
`;

export const BlockSimple: FC<IBlock> = ({ fields }) => {
  return (
    <BlockSimpleVariant variant={fields.type}>
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
      <SectionFooter>
        <Actions actions={fields.actions} />
        <Forms
          form={fields.form}
          variant={fields.type === "stacked" ? "dark" : "light"}
        />
      </SectionFooter>
    </BlockSimpleVariant>
  );
};

export const BlockSimplePlain: FC<{
  title: string;
  type: IBlockFields["type"];
  footer?: ReactNode;
}> = ({ title, type, children, footer }) => {
  return (
    <BlockSimpleVariant variant={type}>
      <Title size="lg">{title}</Title>
      <SectionCopy>
        <Typography variant="body1">{children}</Typography>
      </SectionCopy>
      <SectionFooter>
        {footer}
        {/* <Actions actions={fields.actions} />
      <Forms
        form={fields.form}
        variant={type === "stacked" ? "dark" : "light"}
      /> */}
      </SectionFooter>
    </BlockSimpleVariant>
  );
};
