import { Hero } from "@htc-website/components";
import { ContentfulPageProps, FeaturePageComponent } from "@htc/components";
import { Title } from "@htc/components";
import {
  ContentfulPagination,
  IService,
  IServiceBasic,
  IServiceContact,
  IServiceQuickAction,
  IServiceTeachable
} from "@htc/contentful";
import React from "react";
import { css } from "styled-components";

import { ContentfulSeo } from "../seo";
import { ServiceCard } from "./ServiceCard";
import { ServiceCardBasic } from "./ServiceCardBasic";
import { ServiceCardContact } from "./ServiceCardContact";
import { ServiceCardQuickAction } from "./ServiceCardQuickAction";
import { ServiceCardTeachable } from "./ServiceCardTeachable";
import { withServicesPageLayout } from "./Services.layout";
import { useServices } from "./Services.useServices";

export type ServicesPageProps = ContentfulPageProps<{
  services: ContentfulPagination<IService>;
}>;

export const ServicesPage: FeaturePageComponent<ServicesPageProps> = ({
  contentfulPageData,
  services
}) => {
  const { groupedServices } = useServices(services);
  const {
    fields: { hero }
  } = contentfulPageData;

  return (
    <>
      <ContentfulSeo contentfulPageData={contentfulPageData} />
      {hero && <Hero {...hero.fields} hideGradient />}

      {groupedServices &&
        Object.entries(groupedServices).map(([servicesTitle, services], i) => (
          <div
            key={`${servicesTitle}_${i}`}
            css={css`
              ${({ theme }) => css`
                margin-top: ${theme.size.makeRem(120)};

                &:last-of-type {
                  margin-bottom: ${theme.size.makeRem(120)};
                }
              `}
            `}
          >
            <Title size="lg">{servicesTitle}</Title>
            {services.map(({ fields: { type, ...restfields } }, i) => {
              if (type) {
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
                    {contentType === "serviceQuickAction" && (
                      <ServiceCardQuickAction
                        {...(type as IServiceQuickAction)}
                      />
                    )}
                  </ServiceCard>
                );
              }
              return null;
            })}
          </div>
        ))}
    </>
  );
};

ServicesPage.withPageLayout = withServicesPageLayout;
