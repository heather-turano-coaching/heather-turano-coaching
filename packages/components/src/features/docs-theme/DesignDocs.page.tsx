import { FeaturePageComponent } from "../../../lib";
import { withDesignDocsPageLayout } from "./DesignDocs.layout";

export type DesignDocsPageProps = {
  title: string;
};

export const DesignDocsPage: FeaturePageComponent<DesignDocsPageProps> = ({
  title
}) => {
  return <h1>{title}</h1>;
};

DesignDocsPage.withPageLayout = withDesignDocsPageLayout;
