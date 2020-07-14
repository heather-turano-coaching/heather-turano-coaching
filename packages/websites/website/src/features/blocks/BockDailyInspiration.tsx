import React, { FC } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import {
  LayoutBlock,
  LayoutBlockTitle,
  LayoutBlockContent
} from "../../components/layout";

const StyledBockDailyInspiration = styled.div`
  img {
    width: 100%;
  }
`;

export const BockDailyInspiration: FC = () => {
  const { contentfulBlockInspiration: data } = useStaticQuery(graphql`
    {
      contentfulBlockInspiration {
        block {
          title
        }
        picture {
          file {
            url
          }
        }
      }
    }
  `);

  return (
    <LayoutBlock>
      <LayoutBlockTitle title={data.block[0].title} />
      <LayoutBlockContent>
        <StyledBockDailyInspiration>
          <img
            src={data.picture[0].file.url}
            alt={data.picture[0].file.fileName}
          />
        </StyledBockDailyInspiration>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
