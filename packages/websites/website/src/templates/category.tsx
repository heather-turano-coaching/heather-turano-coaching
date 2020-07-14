import React, { FC } from "react";
import { graphql } from "gatsby";
import { Tag, PostOrPage } from "@tryghost/content-api";

import {
  Layout,
  MetaData,
  PageContainer,
  LayoutContainer,
  LayoutColumn,
  PageHeader,
  BlogPostList,
  LoadMorePostsButton
} from "../components";
import { BlockSubscribe, BlockContributors, BlockTagsList } from "../features";
import { destructureNodes, removeCategoriesFromTags } from "../utils";
import { uniqBy } from "lodash";
import { useProgressiveLoader } from "@heather-turano-coaching/hooks";

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
  location: any;
  pageContext: any;
}

const CategoryPage: FC<CategoryPageProps> = ({ data, location }) => {
  const category = data.ghostTag;
  const posts = destructureNodes(data.allGhostPost.edges);

  const tags = posts
    .filter(post =>
      post.tags?.find(tag => {
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
