import {
  Heading,
  Image,
  Section,
  Typography
} from "@heather-turano-coaching/components";
import { makeRhythm, makeSize } from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import yoga from "../../static/images/meditation.svg";
import { FormSubscribe } from "../components/feature";
import { Layout } from "../components/layout";

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

const NotFoundPage: FC = () => {
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
          <Typography variant="text" fontSize="sm">
            &nbsp;
          </Typography>
          <Typography variant="text" fontSize="sm">
            {data.subTitle}
          </Typography>
          <Image src={yoga} alt="yoga-404" manualWidth={256} />
          <Typography variant="text" fontSize="sm">
            {data.formTitle}
          </Typography>
          <FormSubscribe fieldPrefix="NotFoundPage" />
        </Styled404Container>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
