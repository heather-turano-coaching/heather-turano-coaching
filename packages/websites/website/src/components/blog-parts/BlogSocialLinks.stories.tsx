import React from "react";

import { BlogSocialLinks } from "./BlogSocialLinks";

export default {
  component: BlogSocialLinks,
  title: "Blog|Social Links"
};

const testLink = "go-to-this-social-media-platform";

export const allLinksWithDefaultOrientation = () => (
  <BlogSocialLinks
    social={{
      facebook: testLink,
      pinterest: testLink,
      twitter: testLink,
      instagram: testLink
    }}
  />
);
export const allLinksWithVerticalOrientation = () => (
  <BlogSocialLinks
    orientation="vertical"
    social={{
      facebook: testLink,
      pinterest: testLink,
      twitter: testLink,
      instagram: testLink
    }}
  />
);
export const allLinksWithHorizontalOrientation = () => (
  <BlogSocialLinks
    orientation="horizontal"
    social={{
      facebook: testLink,
      pinterest: testLink,
      twitter: testLink,
      instagram: testLink
    }}
  />
);
export const justFacebook = () => (
  <BlogSocialLinks social={{ facebook: testLink }} />
);
export const justFacebookAndInstagram = () => (
  <BlogSocialLinks social={{ facebook: testLink, instagram: testLink }} />
);
export const justFacebookAndTwitter = () => (
  <BlogSocialLinks social={{ facebook: testLink, instagram: testLink }} />
);
export const noLinks = () => <BlogSocialLinks />;

export const allLinksWithGrayscaleStyle = () => (
  <BlogSocialLinks
    linkStyle="grayscale"
    social={{
      facebook: testLink,
      pinterest: testLink,
      twitter: testLink,
      instagram: testLink
    }}
  />
);
export const justFacebookWithGrayscale = () => (
  <BlogSocialLinks linkStyle="grayscale" social={{ facebook: testLink }} />
);
export const justFacebookAndInstagramWithGrayscale = () => (
  <BlogSocialLinks
    linkStyle="grayscale"
    social={{ facebook: testLink, instagram: testLink }}
  />
);
export const justFacebookAndTwitterWithGrayscale = () => (
  <BlogSocialLinks
    linkStyle="grayscale"
    social={{ facebook: testLink, twitter: testLink }}
  />
);
