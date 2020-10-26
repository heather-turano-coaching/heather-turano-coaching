import { HeroImage } from "components/content/heros";
import { IPageService } from "lib/contentful";
import { PageComponent } from "lib/page";
import React from "react";

import { LayoutRoot } from "../layout";

export type ServicesPageProps = {
  data: IPageService;
};

export const ServicesPage: PageComponent<ServicesPageProps> = ({
  data: { fields }
}) => {
  return (
    <>
      <HeroImage
        title={fields.heroTitle}
        subTitle={fields.heroSubtitle}
        img={fields.heroImage.fields.file.url}
        imgAlt={fields.heroImage.fields.title}
        hideGradient
      />
    </>
  );
};

ServicesPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};
