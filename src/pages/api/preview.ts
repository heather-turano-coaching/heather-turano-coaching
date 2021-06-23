import { getAllContentfulPages } from "@htc/lib/server/contentful";
import { NextApiHandler } from "next";

const staticPages = ["events", "free-consult", "services", "blog"];

export const preview: NextApiHandler = async (req, res) => {
  const { secret, slug } = req.query;
  let url: string | undefined = undefined;

  const dynamicContentfulPages = await getAllContentfulPages({ preview: true });

  // check the secret token
  if (secret !== process.env.HTC_CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: `Invalid token: ${secret}` });
  }

  // check to see if the slug matches the static pages
  staticPages.forEach((pageSlug) => {
    if (pageSlug === slug) {
      url = slug;
    }
  });

  // check to see if the slug matches the contentful pages
  dynamicContentfulPages.items.forEach((contentfulPage) => {
    if (
      contentfulPage.sys.id === slug &&
      contentfulPage.fields.url === "index"
    ) {
      url = "";
    }
    if (
      contentfulPage.sys.id === slug &&
      contentfulPage.fields.url !== "index"
    ) {
      url = contentfulPage.fields.url;
    }
  });

  if (!url) {
    return res.status(401).json({
      message: `Invalid slug. The slug parameter of "${slug}" does not match any page IDs in contentful or static page names created in the code.`
    });
  }

  res.setPreviewData({});

  res.redirect(`/${url}`);
};

export default preview;
