import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BlogCardWelcome } from "../../components";

export const BlogWelcome: FC = () => {
  const {
    contentfulBlogWelcomeBanner: {
      title,
      subTitle,
      descriptionMobilePrompt,
      descriptionDesktopPrompt
    },
    contentfulBlogWelcomeBannerDescriptionTextNode: { description }
  } = useStaticQuery(graphql`
    {
      contentfulBlogWelcomeBanner {
        title
        subTitle
        descriptionDesktopPrompt
        descriptionMobilePrompt
      }
      contentfulBlogWelcomeBannerDescriptionTextNode {
        description
      }
    }
  `);

  return (
    <BlogCardWelcome
      title={title}
      subTitle={subTitle}
      description={description}
      descriptionMobilePrompt={descriptionMobilePrompt}
      descriptionDesktopPrompt={descriptionDesktopPrompt}
    />
  );
};
