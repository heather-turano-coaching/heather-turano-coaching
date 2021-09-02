import fs from "fs";
import { join } from "path";

import glob from "glob";
import matter from "gray-matter";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export const CATEGORY_DOCS_PATH = join(
  serverRuntimeConfig.PROJECT_ROOT,
  "./src/features"
);
export const LIB_DOCS_PATH = join(serverRuntimeConfig.PROJECT_ROOT, "./lib");

// docsFilePath is the list of all mdx files inside the DOCS_PATH directory
export const categoryDocsFilePath = fs
  .readdirSync(CATEGORY_DOCS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const libraryDocsFilePath = fs
  .readdirSync(LIB_DOCS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const getCategoryDocs = () => {
  return glob.sync(`${CATEGORY_DOCS_PATH}/**/*.mdx`).map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);

    return {
      content,
      data: {
        title: data.title,
        path: data.path,
        ...data
      },
      filePath
    };
  });
};
