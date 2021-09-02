import { FeaturePageComponent } from "../../../lib";
import { withComponentDocsPageLayout } from "./ComponentDocs.layout";

export type ComponentDocsPageProps = {
  title: string;
};

export const ComponentDocsPage: FeaturePageComponent<ComponentDocsPageProps> =
  ({ title }) => {
    return <h1>{title}</h1>;
  };

ComponentDocsPage.withPageLayout = withComponentDocsPageLayout;
