import { getAllContentfulPages } from "@htc/lib/server/contentful";
import { NextApiHandler } from "next";

const staticPages = ["events", "free-consult", "services", "blog"];

export const preview: NextApiHandler = async (req, res) => {
  const { secret, slug } = req.query;
  let url: string | undefined = undefined;

  const dynamicContentfulPages = await getAllContentfulPages();

  // check the secret token
  if (secret !== process.env.HTC_CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // check to see if the slug matches the static pages
  staticPages.forEach((pageSlug) => {
    if (pageSlug === slug) {
      url = slug;
    }
  });

  // check to see if the slug matches the contentful pages
  dynamicContentfulPages.items.forEach((contentfulPage) => {
    if (contentfulPage.sys.id === slug) {
      url = slug;
    }
  });

  if (!url) {
    return res.status(401).json({
      message: `Invalid slug. The slug parameter of "${slug}" does not match any page IDs in contentful or static page names created in the code.`
    });
  }

  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=/${url}" />
    <script>window.location.href = '/${url}'</script>
    </head>`
  );
  res.end();
};

export default preview;
