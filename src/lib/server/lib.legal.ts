import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

const legalDir = join(process.cwd(), "./src/features/legal");

export const getLegalDocSlugs = () =>
  fs.readdirSync(legalDir).filter((filename) => filename.includes(".md"));

export const getLegalDocBySlug = (slug: string, fields: string[]) => {
  const slugWithoutMd = slug.replace(/\.md$/, "");
  const realSlug = slugWithoutMd.replace(/^(legal\.)/, "");
  const fullPath = join(legalDir, `legal.${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  console.log(items);

  return items;
};

export const getAllLegalDocs = (fields: string[] = []) => {
  const slugs = getLegalDocSlugs();
  const legalDogs = slugs.map((slug) => getLegalDocBySlug(slug, fields));

  return legalDogs;
};
