import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import React, { FC, ReactNode } from "react";

import { Typography, TypographyProps } from "../display";
import { TextStyles } from "./TextStyles";

export const RichTextContentful: FC<{
  copyProps: TypographyProps;
  richText: string | JSON | Document;
}> = ({ copyProps, richText }) => {
  const json = typeof richText === "string" ? JSON.parse(richText) : richText;

  return (
    <TextStyles>
      {documentToReactComponents(json, {
        renderMark: {
          [MARKS.BOLD]: function MarksBold(text: ReactNode) {
            return <strong>{text}</strong>;
          }
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: function BlocksParagraph(
            _node: unknown,
            children: ReactNode
          ) {
            return <Typography {...copyProps}>{children}</Typography>;
          }
        }
      })}
    </TextStyles>
  );
};
