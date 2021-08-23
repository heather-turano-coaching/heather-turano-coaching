import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

const legalDir = join(process.cwd(), "./src/features/legal/docs");

export const parseLegalDocSlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  console.log("realSlug", realSlug);
  return realSlug;
};

export const getLegalDocSlugs = () =>
  fs
    .readdirSync(legalDir)
    .filter((filename) => filename.includes(".md"))
    .map((slug) => parseLegalDocSlug(slug));

export const getLegalDocBySlug = (slug: string, fields: string[]) => {
  const fullPath = join(legalDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      console.log("field", slug);
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllLegalDocs = (fields: string[] = []) => {
  const slugs = getLegalDocSlugs();
  console.log(slugs);
  const legalDocks = slugs.map((slug) =>
    getLegalDocBySlug(parseLegalDocSlug(slug), fields)
  );
  console.log("legalDocks", legalDocks);

  return legalDocks;
};
