import fs from "fs";
import { join } from "path";

import glob from "glob";
import matter from "gray-matter";
import getConfig from "next/config";

import { Doc, DocNav } from "../types";

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

export const getAllDocs = (): Doc[] => {
  return glob.sync(`${LIB_DOCS_PATH}/**/*.mdx`).map((filePath) => {
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

export const getDocNav = (_category: string): DocNav => {
  const allDocs = getAllDocs();
  const nav = allDocs.reduce<DocNav>((accum, doc) => {
    if (accum[doc.data.path[0]]) {
      return {
        ...accum,
        [doc.data.path[0]]: [
          ...accum[doc.data.path[0]],
          { label: doc.data.title, path: doc.data.path }
        ]
      };
    }
    return {
      ...accum,
      [doc.data.path[0]]: [{ label: doc.data.title, path: doc.data.path }]
    };
  }, {});

  return nav;
};

export const getDocBySlug = (slug: string[] | undefined) => {
  const allDocs = getAllDocs();
  console.log(allDocs, slug);
  return allDocs.reduce((accum, doc) => {
    if (typeof slug === "undefined" && doc.data.path.join("_") === "index") {
      return doc;
    }
    if (
      typeof slug !== "undefined" &&
      doc.data.path.join("_") === slug.join("_")
    ) {
      return doc;
    }
    return accum;
  });
};
