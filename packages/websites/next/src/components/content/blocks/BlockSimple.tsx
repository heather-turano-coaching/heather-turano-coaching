import {
  ContentfulRichText,
  Section,
  SectionCopy,
  SectionFooter,
  SectionProps,
  Title
} from "@heather-turano-coaching/core/components";
import { IBlock, IBlockFields } from "lib/contentful";
import React, { FC } from "react";

import { Actions } from "../actions";

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
          <ContentfulRichText
            richText={fields.description}
            copyProps={{
              fontSize: "md",
              variant: "paragraph"
            }}
          />
        )}
        <SectionFooter>
          <Actions actions={fields.actions} />
        </SectionFooter>
      </SectionCopy>
    </Section>
  );
};
