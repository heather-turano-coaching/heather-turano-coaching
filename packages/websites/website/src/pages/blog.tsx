import { useBreakpoints } from "@heather-turano-coaching/hooks";
import React from "react";

import {
  Layout,
  LayoutColumn,
  LayoutContainer,
  MetaData,
  PageContainer
} from "../components";
import {
  BlockContributors,
  BlockFeaturedCategory,
  BlockFeaturedPosts,
  BlockRecentPosts,
  BlockSubscribe,
  BlockTagsList,
  BockDailyInspiration
} from "../features";

// @ts-ignore
const BlogPage = ({ location }) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const AltColumn = (
    <LayoutColumn>
      <BlockSubscribe />
      <BockDailyInspiration />
      {!isWindowMobile && (
        <>
          <BlockContributors />
          <BlockTagsList title="Recent tags" limit={10} />
        </>
      )}
    </LayoutColumn>
  );
  const PostColumn = (
    <LayoutColumn colWidth={628}>
      <BlockFeaturedCategory />
      <BlockRecentPosts />
      {isWindowMobile && (
        <>
          <BlockContributors />
          <BlockTagsList title="Recent tags" limit={10} />
          <BlockSubscribe />
        </>
      )}
    </LayoutColumn>
  );

  return (
    <Layout pageTitle="blog">
      <MetaData location={location} />
      <PageContainer>
        <LayoutContainer layoutType="stacked">
          <BlockFeaturedPosts />
        </LayoutContainer>
        <LayoutContainer>
          {isWindowMobile ? (
            <>
              {AltColumn}
              {PostColumn}
            </>
          ) : (
            <>
              {PostColumn}
              {AltColumn}
            </>
          )}
        </LayoutContainer>
      </PageContainer>
    </Layout>
  );
};

export default BlogPage;
