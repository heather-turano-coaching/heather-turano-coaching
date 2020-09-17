import { useBreakpoints } from "@heather-turano-coaching/hooks";
import React from "react";

import { MetaData, PageContainer } from "../components/content";
import {
  BlockContributors,
  BlockFeaturedCategory,
  BlockFeaturedPosts,
  BlockRecentPosts,
  BlockSubscribe,
  BlockTagsList,
  BockDailyInspiration
} from "../components/feature";
import { Layout, LayoutColumn, LayoutContainer } from "../components/layout";

// @ts-ignore
const BlogPage: FC = ({ location }) => {
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
