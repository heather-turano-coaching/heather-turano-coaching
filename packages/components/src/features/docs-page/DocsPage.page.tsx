import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

import { FeaturePageComponent, ThemeProvider } from "../../../lib";
import { Doc, DocNav } from "../../types";
import { withDocsPageLayout } from "./DocsPage.layout";

export type DocsPageProps = {
  nav: DocNav;
  doc: Doc;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export const DocsPage: FeaturePageComponent<DocsPageProps> = ({ source }) => {
  return (
    <ThemeProvider>
      <MDXRemote {...source} />
    </ThemeProvider>
  );
};

DocsPage.withPageLayout = withDocsPageLayout;
