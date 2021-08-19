import { FeaturePageComponent } from "../page";
import { withLegalPageLayout } from "./Legal.layout";

export const LegalPage: FeaturePageComponent = () => {
  return <div>Legal</div>;
};

LegalPage.withPageLayout = withLegalPageLayout;
