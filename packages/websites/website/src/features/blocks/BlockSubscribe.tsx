import { Heading, Typography } from "@heather-turano-coaching/components";
import {
  makeColor,
  makeInset,
  makeRhythm,
  makeSize
} from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import {
  LayoutBlock,
  LayoutBlockContent,
  LayoutBlockTitle
} from "../../components/layout";
import { FormSubscribe } from "../forms";

interface BlockSubscribeProps {
  displayBlockTitle?: boolean;
}
const StyledSubscribeContnet = styled.div`
  ${makeInset({ horizontal: 32, vertical: 32 })};
  background: ${makeColor({ fixed: "dark" })};

  & > * {
    max-width: ${makeSize({ custom: 400 })};
    margin: 0 auto;
  }
`;

const StyledContentCopy = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }

  p {
    ${makeRhythm({ fontSize: "sm", bottom: 2, top: 1 })};
  }
`;

export const BlockSubscribe: FC<BlockSubscribeProps> = ({
  displayBlockTitle = true
}) => {
  const { contentfulBlockSubscribe: queryData } = useStaticQuery(graphql`
    {
      contentfulBlockSubscribe {
        ...BlockSubscribeFields
      }
    }
  `);

  return (
    <LayoutBlock>
      {displayBlockTitle && (
        <LayoutBlockTitle title={queryData.block[0].title} />
      )}
      <LayoutBlockContent>
        <StyledSubscribeContnet>
          <StyledContentCopy>
            <Heading
              fontSize="h1"
              fontColor={{ fixed: "light" }}
              fontFamily="Covered By Your Grace"
            >
              {queryData.contentTitle}
            </Heading>
            <Typography variant="text" fontColor={{ fixed: "light" }}>
              {queryData.description}
            </Typography>
          </StyledContentCopy>
          <FormSubscribe fieldPrefix="BlockSubscribe" />
        </StyledSubscribeContnet>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
