import { HeroImage } from "components/content/heros";
import { IPageService } from "lib/contentful";
import { FC } from "react";

export const PageServices: FC<IPageService> = ({ fields }) => {
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
