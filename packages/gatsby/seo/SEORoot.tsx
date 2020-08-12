import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { PageSEOProperties, SiteSEOProperties } from "./seo.types";
import { SEOFacebook } from "./SEOFacebook";
import { SEOTwitter } from "./SEOTwitter";

export const SEO: FC<PageSEOProperties> = ({
  pageTitle,
  pageDescription,
  pageImage = null,
  pageKeywords = [],
  pageAuthor = null
}) => {
  const { pathname } = useLocation();
  const {
    site: { siteMetadata }
  } = useStaticQuery<{
    site: {
      siteMetadata: SiteSEOProperties;
    };
  }>(graphql`
    {
      site {
        siteMetadata {
          sitePathPrefix
          siteTitle
          siteTitleAlt
          siteDescription
          siteImage
          siteUrl
          siteHeadline
          siteLanguage
          siteOgLanguage
          siteAuthor
          siteBaseKeywords
          twitterHandle
        }
      }
    }
  `);

  const baseKeywords = siteMetadata.siteBaseKeywords || [];

  const metaTitle = `${pageTitle} | ${siteMetadata.siteTitle}`;
  const metaDescription = pageDescription || siteMetadata.siteDescription;
  const metaAuthor = pageAuthor || siteMetadata.siteAuthor;
  const metaImage = pageImage || siteMetadata.siteImage;
  const metaKeywords = [...pageKeywords, ...baseKeywords];
  const metaUrl = `${siteMetadata.siteUrl}${pathname}`;

  /**
   * React Helmet can't have nested fragments so that's why they're
   * put inline with each other inside of a fragment
   *
   * https://github.com/nfl/react-helmet#example
   */
  return (
    <>
      <Helmet title={metaTitle}>
        <html lang={siteMetadata.siteLanguage} />
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="noodp" />
        <meta name="image" content={metaImage} />
        <meta name="author" content={metaAuthor} />
        <meta name="keywords" content={metaKeywords.join(", ")} />
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </Helmet>
      {siteMetadata.facebookProfileUrl && (
        <SEOFacebook
          description={metaDescription}
          image={metaImage}
          title={metaTitle}
          // type={article ? "article" : "website"}
          url={metaUrl}
          locale={siteMetadata.siteOgLanguage}
          name={siteMetadata.facebookProfileUrl}
        />
      )}
      {siteMetadata.twitterHandle && (
        <SEOTwitter
          title={metaTitle}
          image={metaImage}
          description={metaDescription}
          username={siteMetadata.twitterHandle}
        />
      )}
    </>
  );
};
