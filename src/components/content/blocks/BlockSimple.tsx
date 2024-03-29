import { SectionCopy, SectionFooter, Title } from "@htc/components/atomic";
import { RichText } from "@htc/components/atomic";
import { IBlock, IBlockFields } from "@htc/lib/server/contentful";
import { makeDesktopStyles, makeMobileStyles, makeRem } from "@htc/theme";
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
  max-width: ${makeRem(700)};

  ${({ theme, variant }) => {
    switch (variant) {
      case "plain":
        return css`
          ${makeMobileStyles(theme)} {
            margin-top: ${makeRem(120)};
            margin-bottom: ${makeRem(120)};
          }
          ${makeDesktopStyles(theme)} {
            padding-top: ${makeRem(160)};
            padding-bottom: ${makeRem(160)};
          }
        `;

      case "stacked":
        return css`
          margin-top: ${makeRem(200)};
          margin-bottom: ${makeRem(200)};
          padding-top: ${makeRem(60)};
          padding-bottom: ${makeRem(60)};
          background-color: ${theme.palette.light.light};
          position: relative;

          ${makeDesktopStyles(theme)} {
            padding: ${makeRem(60)};

            &::after {
              content: "";
              position: absolute;
              height: 100%;
              width: 100%;
              right: -${makeRem(56)};
              bottom: -${makeRem(56)};
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
