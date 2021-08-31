import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import { makeRhythm } from "@htc/design-system";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { Typography, TypographyProps } from "./Typography";

const StyledRichText = styled.div`
  strong {
    font-weight: 500;
  }

  p {
    ${makeRhythm({
      top: 0,
      bottom: 1,
      fontSize: "md"
    })}
  }
`;

export const ContentfulRichText: FC<{
  copyProps: TypographyProps;
  richText: string | JSON | Document;
}> = ({ copyProps, richText }) => {
  const json = typeof richText === "string" ? JSON.parse(richText) : richText;

  return (
    <StyledRichText>
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
    </StyledRichText>
  );
};
