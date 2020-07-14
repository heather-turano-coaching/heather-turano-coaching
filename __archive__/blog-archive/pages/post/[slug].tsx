import {
  BlogCardAvatar,
  BlogSocialLinks,
  Content,
  Heading,
  Hero,
  Section,
} from "@heather-turano-coaching/components";
import {
  makeColor,
  makeRhythm,
} from "@heather-turano-coaching/design-system/utils";
import { PostOrPage } from "@tryghost/content-api";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

import { getPostBySlug } from "../../api";
import { TagsSection } from "../../components";
import { formatLongDate } from "../../utils";

interface BlogPostProps {
  blogPost: PostOrPage;
}

const StyledBlogHero = styled.header``;
const StyledBlogHeading = styled.div`
  h2 {
    line-height: 1.2;
    color: ${makeColor({ fixed: "dark" })};
    ${makeRhythm({ top: 2, bottom: 1 })};
  }
`;

const BlogPost: NextPage<BlogPostProps> = ({
  blogPost: {
    id,
    feature_image,
    primary_author,
    published_at,
    title,
    html,
    tags,
  },
}) => (
  <>
    <StyledBlogHero>
      {feature_image && <Hero image={feature_image} alt="hero" />}
    </StyledBlogHero>
    <Section styleType="blog-page">
      <BlogCardAvatar
        layoutType={feature_image ? "stacked" : "inline"}
        authorName={primary_author?.name as string}
        avatarImg={primary_author?.profile_image as string}
        datePublished={formatLongDate(published_at as string)}
      />
      <StyledBlogHeading>
        <Heading fontSize="h2">{title}</Heading>
      </StyledBlogHeading>
      <Content htmlContent={html as string} />
      <TagsSection tags={tags} />
      <BlogSocialLinks
        linkStyle="grayscale"
        social={{
          facebook: "test-facebook",
          twitter: "test-twitter",
          pinterest: "test-pinterest",
          instagram: "test-instagram",
        }}
      />
    </Section>
    <Section styleType="blog-page">
      <Heading fontSize="h2">Comments</Heading>
      <script
        defer
        src={process.env.COMMENTO_ORIGIN}
        data-auto-init="true"
      ></script>
      <div id={id}></div>
    </Section>
  </>
);

BlogPost.getInitialProps = async ({ query }) => {
  const { posts } = await getPostBySlug(query.slug as string);

  return { blogPost: posts[0] };
};

export default BlogPost;
