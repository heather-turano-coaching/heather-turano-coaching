import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Copy, CopyProps } from "@heather-turano-coaching/components";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledRichText = styled.div`
  strong {
    font-weight: 500;
  }
`;

export const ContentfulRichText: FC<{ copy: CopyProps; richText: string }> = ({
  copy,
  richText,
}) => (
  <StyledRichText>
    {documentToReactComponents(JSON.parse(richText), {
      renderMark: {
        [MARKS.BOLD]: (text: ReactNode): ReactNode => <strong>{text}</strong>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode): ReactNode => (
          <Copy {...copy}>{children}</Copy>
        ),
      },
    })}
  </StyledRichText>
);
