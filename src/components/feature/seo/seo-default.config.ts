import { DefaultSeoProps } from "next-seo";

export const defaultSeoConfig: DefaultSeoProps = {
  defaultTitle: "Heather Turano Coaching",
  titleTemplate: "%s | Heather Turano Coaching",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heatherturanocoaching.com",
    site_name: "Heather Turano Coaching"
  },
  twitter: {
    handle: "@heatherturanocoaching",
    site: "@site",
    cardType: "summary_large_image"
  }
};
