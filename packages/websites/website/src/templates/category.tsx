import { useProgressiveLoader } from "@heather-turano-coaching/hooks";
import { PostOrPage, Tag } from "@tryghost/content-api";
import { graphql } from "gatsby";
import { uniqBy } from "lodash";
import React, { FC } from "react";

import {
  BlogPostList,
  LoadMorePostsButton,
  MetaData,
  PageContainer,
  PageHeader
} from "../components/content";
import { Layout, LayoutColumn, LayoutContainer } from "../components/layout";
import { BlockContributors, BlockSubscribe, BlockTagsList } from "../features";
import { destructureNodes, removeCategoriesFromTags } from "../utils";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
interface CategoryPageProps {
  data: {
    ghostTag: Tag;
    allGhostPost: {
      edges: {
        node: PostOrPage;
      }[];
    };
  };
  location: Record<string, unknown>;
  pageContext: Record<string, unknown>;
}

const CategoryPage: FC<CategoryPageProps> = ({ data, location }) => {
  const category = data.ghostTag;
  const posts = destructureNodes(data.allGhostPost.edges);

  const tags = posts
    .filter((post) =>
      post.tags?.find((tag) => {
        return tag.slug === category.slug;
      })
    )
    .flatMap(({ tags }) => tags);
  const tagsUnique = uniqBy(removeCategoriesFromTags(tags as Tag[]), "id");
  const categoryName = category.name ? category.name.split("-")[1] : "";

  const [postList, loadMorePosts, morePostsExist] = useProgressiveLoader<
    PostOrPage
  >({ list: posts });

  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout pageTitle={categoryName}>
        <PageContainer>
          <LayoutContainer layoutType="stacked">
            <LayoutColumn>
              <PageHeader pageName="category" pageTitle={categoryName} />
            </LayoutColumn>
          </LayoutContainer>
          <LayoutContainer>
            <LayoutColumn colWidth={700}>
              <BlogPostList posts={postList} />
              {morePostsExist && (
                <LoadMorePostsButton loadMorePosts={loadMorePosts} />
              )}
            </LayoutColumn>
            <LayoutColumn>
              <BlockSubscribe displayBlockTitle={false} />
              <BlockContributors
                title="Authors of this category"
                posts={postList}
              />
              <BlockTagsList title="Tags in this category" tags={tagsUnique} />
            </LayoutColumn>
          </LayoutContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default CategoryPage;

export const pageQuery = graphql`
  query GhostCategoryQuery($slug: String!) {
    # Tag Information
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }

    # Posts with Tag
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
