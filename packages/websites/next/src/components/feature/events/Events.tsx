import { HeroImage } from "components/content/heros";
import { IPageEvents } from "lib/contentful";
import React, { FC } from "react";

export const PageEvents: FC<IPageEvents> = ({ fields }) => (
  <>
    <HeroImage
      title={fields.heroTitle}
      subTitle={fields.heroSubtitle}
      img={fields.heroImage.fields.file.url}
      imgAlt={fields.heroImage.fields.title}
    />
  </>
);
