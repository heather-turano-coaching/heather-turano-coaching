import { Title } from "@htc/core/dist/src/components";
import { IServiceFields, IWebPage } from "@htc/domain/contentful";
import {
  IServiceBasic,
  IServiceContact,
  IServiceTeachable
} from "@htc/domain/contentful/generated/contentful";
import { PageComponent } from "@htc/lib/page";
import { makeRem } from "@htc/theme";
import { Hero } from "components/content/heros";
import { EntryCollection } from "contentful";
import React from "react";
import { css } from "styled-components";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";
import { ServiceCard } from "./ServiceCard";
import { ServiceCardBasic } from "./ServiceCardBasic";
import { ServiceCardContact } from "./ServiceCardContact";
import { ServiceCardTeachable } from "./ServiceCardTeachable";
import { useServices } from "./useServices";

export type ServicesPageProps = {
  pageId: string;
  pageData: IWebPage;
  services: EntryCollection<IServiceFields>;
};

export const ServicesPage: PageComponent<ServicesPageProps> = ({
  pageId: _pageId,
  pageData,
  services
}) => {
  const { groupedServices } = useServices(services);

  return (
    <>
      <Meta pageTitle="Services" />
      <Hero {...pageData.fields.hero.fields} hideGradient />
      {Object.entries(groupedServices).map(([servicesTitle, services], i) => (
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
              <ServiceCard {...restfields} key={`${type.fields.systemId}_${i}`}>
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
