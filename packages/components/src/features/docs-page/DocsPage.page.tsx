import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

import { FeaturePageComponent, HTCThemeProvider } from "../../../lib";
import { Doc, DocNav } from "../../types";
import { withDocsPageLayout } from "./DocsPage.layout";

export type DocsPageProps = {
  nav: DocNav;
  doc: Doc;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export const DocsPage: FeaturePageComponent<DocsPageProps> = ({ source }) => {
  return (
    <HTCThemeProvider>
      <MDXRemote {...source} />
    </HTCThemeProvider>
  );
};

DocsPage.withPageLayout = withDocsPageLayout;
