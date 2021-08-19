import { FeaturePageComponent } from "@htc/features/page";
import { useRouter } from "next/router";

import { withLegalDocPageLayout } from "./LegalDoc.layout";

export type LegalDocProps = {
  legalDoc: {
    [key: string]: string;
    content: string;
  };
};

export const LegalDocPage: FeaturePageComponent<LegalDocProps> = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props?.legalDoc.slug) {
    return <div>uh oh...</div>;
  }

  return <code>{JSON.stringify(props, null, 4)}</code>;
};

LegalDocPage.withPageLayout = withLegalDocPageLayout;
