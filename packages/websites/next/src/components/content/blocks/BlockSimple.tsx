import {
  Section,
  SectionCopy,
  SectionFooter,
  SectionProps,
  Title
} from "@heather-turano-coaching/core/components";
import {
  makeDesktopStyles,
  makeMobileStyles,
  makeRem
} from "@heather-turano-coaching/core/dist/src/theme";
import { IBlock, IBlockFields } from "@heather-turano-coaching/domain";
import { Container } from "@material-ui/core";
import { RichText } from "components/atomic";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Actions } from "../actions";
import { Forms } from "../forms";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typeMap: { [key in IBlockFields["type"]]: SectionProps["styleType"] } = {
  plain: "blank",
  stacked: "layered"
};

const BlockSimpleVariant = styled(Container)<{
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
