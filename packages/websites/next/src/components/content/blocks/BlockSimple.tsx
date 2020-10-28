import {
  Section,
  SectionCopy,
  SectionFooter,
  SectionProps,
  Title
} from "@heather-turano-coaching/core/components";
import { IBlock, IBlockFields } from "@heather-turano-coaching/domain";
import { RichText } from "components/atomic";
import React, { FC } from "react";

import { Actions } from "../actions";
import { Forms } from "../forms";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typeMap: { [key in IBlockFields["type"]]: SectionProps["styleType"] } = {
  plain: "blank",
  stacked: "layered"
};

export const BlockSimple: FC<IBlock> = ({ fields }) => {
  return (
    <Section styleType={typeMap[fields.type]}>
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
        <SectionFooter>
          <Actions actions={fields.actions} />
          <Forms
            form={fields.form}
            variant={fields.type === "stacked" ? "dark" : "light"}
          />
        </SectionFooter>
      </SectionCopy>
    </Section>
  );
};
