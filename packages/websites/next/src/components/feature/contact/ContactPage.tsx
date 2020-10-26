import { HeroOffsetHorizontal } from "components/content/heros";
import { IPageContact } from "lib/contentful";
import { PageComponent } from "lib/page";
import React from "react";

import { LayoutRoot } from "../layout";

export type ContactPageProps = {
  data: IPageContact;
};

export const ContactPage: PageComponent<ContactPageProps> = ({
  data: { fields }
}) => (
  <>
    <HeroOffsetHorizontal
      title={fields.title}
      subTitle={fields.heroDescription}
      img={fields.heroImage.fields.file.url}
      imgAlt={fields.heroImageAlt}
    />
  </>
);

ContactPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};
