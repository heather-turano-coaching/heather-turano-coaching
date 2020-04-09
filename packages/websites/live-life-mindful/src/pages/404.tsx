import {
  Copy,
  Heading,
  Image,
  Section,
} from "@heather-turano-coaching/components";
import {
  makeRhythm,
  makeSize,
} from "@heather-turano-coaching/design-system/utils";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import yoga from "../../static/images/meditation.svg";
import { Layout } from "../components";
import { FormSubscribe } from "../features";

const Styled404Container = styled.div`
  text-align: center;

  img {
    ${makeRhythm({ fontSize: "sm", bottom: 2, top: 2 })}
  }

  form {
    margin: 0 auto;
    max-width: ${makeSize({ custom: 500 })};

    & > div {
      ${makeRhythm({ fontSize: "sm", bottom: 1, top: 1 })};
    }
  }
`;

const NotFoundPage = () => {
  const { contentful404NotFound: data } = useStaticQuery(graphql`
    {
      contentful404NotFound {
        title
        subTitle
        formTitle
      }
    }
  `);

  return (
    <Layout pageTitle="Not Found">
      <Section styleType="layered">
        <Styled404Container>
          <Heading>{data.title}</Heading>
          <Copy fontSize="sm">&nbsp;</Copy>
          <Copy fontSize="sm">{data.subTitle}</Copy>
          <Image src={yoga} alt="yoga-404" manualWidth={256} />
          <Copy fontSize="sm">{data.formTitle}</Copy>
          <FormSubscribe fieldPrefix="NotFoundPage" />
        </Styled404Container>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
