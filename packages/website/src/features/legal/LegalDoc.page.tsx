import { RichTextHTML } from "@htc-website/components";
import { FeaturePageComponent } from "@htc-website/features/page";
import { useRouter } from "next/router";

import { withLegalDocPageLayout } from "./LegalDoc.layout";

export type LegalDocProps = {
  legalDoc: {
    [key: string]: string;
    content: string;
    slug: string;
  };
  legalDocRoutes: { href: string; title: string }[];
};

export const LegalDocPage: FeaturePageComponent<LegalDocProps> = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props?.legalDoc.slug) {
    return <div>uh oh...</div>;
  }
  return (
    <RichTextHTML htmlString={props.legalDoc.content}>
      {JSON.stringify(props, null, 4)}
    </RichTextHTML>
  );
};

LegalDocPage.withPageLayout = withLegalDocPageLayout;
