import { Title } from "@htc/components/atomic";
import { Hero } from "@htc/components/content";
import {
  IServiceBasic,
  IServiceContact,
  IServiceFields,
  IServiceTeachable
} from "@htc/lib/contentful";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { EntryCollection } from "contentful";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";
import { ServiceCard } from "./ServiceCard";
import { ServiceCardBasic } from "./ServiceCardBasic";
import { ServiceCardContact } from "./ServiceCardContact";
import { ServiceCardTeachable } from "./ServiceCardTeachable";
import { useServices } from "./Services.useServices";

export type ServicesPageProps = {
  services: EntryCollection<IServiceFields>;
};

export const ServicesPage: PageComponent<ServicesPageProps> = ({
  contentfulPageData: {
    fields: {
      hero: { fields: heroFields }
    }
  },
  services
}) => {
  const { groupedServices } = useServices(services);

  return (
    <>
      <Meta pageTitle="Services" />
      <Hero {...heroFields} hideGradient />

      {groupedServices &&
        Object.entries(groupedServices).map(([servicesTitle, services], i) => (
          <div
            key={`${servicesTitle}_${i}`}
            css={css`
              margin-top: ${makeRem(120)};

              &:last-of-type {
                margin-bottom: ${makeRem(120)};
              }
            `}
          >
            <Title size="lg">{servicesTitle}</Title>
            {services.map(({ fields: { type, ...restfields } }, i) => {
              const contentType = type.sys.contentType.sys.id;
              return (
                <ServiceCard
                  {...restfields}
                  key={`${type.fields.systemId}_${i}`}
                >
                  {contentType === "serviceBasic" && (
                    <ServiceCardBasic {...(type as IServiceBasic)} />
                  )}
                  {contentType === "serviceContact" && (
                    <ServiceCardContact {...(type as IServiceContact)} />
                  )}
                  {contentType === "serviceTeachable" && (
                    <ServiceCardTeachable {...(type as IServiceTeachable)} />
                  )}
                </ServiceCard>
              );
            })}
          </div>
        ))}
    </>
  );
};

ServicesPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};