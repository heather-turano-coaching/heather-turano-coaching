import React from "react";

import { FeaturePageComponent } from "../../../lib";
import { Doc, DocNav } from "../../types";
import { withDocsPageLayout } from "./DocsPage.layout";

export type DocsPageProps = {
  nav: DocNav;
  doc: Doc;
};

export const HomePage: FeaturePageComponent<DocsPageProps> = ({ doc }) => {
  console.log(doc);

  return (
    <div>
      <span>{doc.data.path.join(" / ")}</span>
      <h1>{doc.data.title}</h1>
    </div>
  );
};

HomePage.withPageLayout = withDocsPageLayout;
