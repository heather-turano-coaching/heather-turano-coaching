import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  Typography,
  TypographyProps,
} from "@heather-turano-coaching/components";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledRichText = styled.div`
  strong {
    font-weight: 500;
  }
`;

export const ContentfulRichText: FC<{
  copy: TypographyProps;
  richText: string | JSON;
}> = ({ copy, richText }) => {
  const json = typeof richText === "string" ? JSON.parse(richText) : richText;
  return (
    <StyledRichText>
      {documentToReactComponents(json, {
        renderMark: {
          [MARKS.BOLD]: (text: ReactNode): ReactNode => <strong>{text}</strong>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode): ReactNode => (
            <Typography {...copy}>{children}</Typography>
          ),
        },
      })}
    </StyledRichText>
  );
};
