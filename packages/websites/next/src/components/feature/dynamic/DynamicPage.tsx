// import {
//   Button,
//   ButtonGroup,
//   ContentfulRichText,
//   Section,
//   SectionCopy,
//   SectionFooter,
//   SectionSplitPane,
//   Title,
//   Typography
// } from "@heather-turano-coaching/core/components";
// import { makeColor } from "@heather-turano-coaching/core/design-system";
// import { HeroImage } from "components/content/heros";
// import { TestimonialCarousel } from "components/content/testimonials";
import { IWebPage } from "@heather-turano-coaching/domain";
import { Blocks } from "components/content/blocks";
import { Hero } from "components/content/heros";
import { getEntryById } from "lib/contentful";
import { PageComponent } from "lib/page";
import React from "react";
import useSWR from "swr";

import { LayoutRoot } from "../layout";
import { Meta } from "../meta";

// import { css } from "styled-components";

export type DynamicPageProps = {
  pageId: string;
  data: IWebPage;
};

export const DynamicPage: PageComponent<DynamicPageProps> = ({
  pageId,
  data
}) => {
  const {
    data: {
      fields: {
        navbarLabel,
        hero: { fields: heroFields },
        blocks
      }
    }
  } = useSWR<IWebPage>(
    `/${pageId}`,
    async () => getEntryById<IWebPage>(pageId),
    { initialData: data }
  );

  return (
    <>
      <Meta pageTitle={navbarLabel} />
      <Hero {...heroFields} />
      <Blocks blocks={blocks} />
    </>
  );

  //     {/* About Section */}
  //     <div
  //       css={css`
  //         background: ${makeColor({ fixed: "light" })};
  //       `}
  //     >
  //       <Section styleType="blank">
  //         <Title size="lg">{fields.aboutTitle}</Title>
  //         <SectionCopy>
  //           <ContentfulRichText
  //             copyProps={{
  //               variant: "text",
  //               fontSize: "md"
  //             }}
  //             richText={fields.aboutDescription}
  //           />
  //         </SectionCopy>
  //         <SectionFooter>
  //           <ButtonGroup layout="inline" align="center">
  //             <Button
  //               label={fields.aboutLearnMoreLinkText}
  //               styleType="primary"
  //             />
  //             <Button
  //               label={fields.aboutGoToServicesLinkText}
  //               styleType="secondary"
  //             />
  //           </ButtonGroup>
  //         </SectionFooter>
  //       </Section>
  //     </div>

  //     {/* Services */}

  //     {/* Testimonials */}
  //     <Section styleType="split">
  //       <SectionSplitPane background={{ fixed: "light" }}>
  //         <Title size="lg">{fields.testimonialsTitle}</Title>
  //         <SectionCopy>
  //           <ContentfulRichText
  //             copyProps={{
  //               fontSize: "md",
  //               variant: "text"
  //             }}
  //             richText={fields.testimonialsDescription}
  //           />
  //         </SectionCopy>
  //         <SectionFooter>
  //           <ButtonGroup layout="inline" align="center">
  //             <Button
  //               styleType="secondary"
  //               label={fields.testimonialsCtaLabel}
  //             />
  //           </ButtonGroup>
  //         </SectionFooter>
  //       </SectionSplitPane>
  //       <SectionSplitPane
  //         background={{ scalable: { color: "gray", scale: 0 } }}
  //         spaceType="flush"
  //       >
  //         <TestimonialCarousel
  //           testimonials={fields.testimonialsListOfTestimonials}
  //         />
  //       </SectionSplitPane>
  //     </Section>

  //     {/* Contact */}
  //     <Section styleType="layered">
  //       <Title size="lg">{fields.contactTitle}</Title>
  //       <SectionCopy>
  //         <ContentfulRichText
  //           copyProps={{
  //             fontSize: "md",
  //             variant: "text"
  //           }}
  //           richText={fields.contactDescription}
  //         />
  //       </SectionCopy>
  //       <SectionFooter>
  //         <div style={{ maxWidth: "80%", margin: "0 auto" }}>
  //           <div>Aweber placeholder</div>
  //         </div>
  //       </SectionFooter>
  //     </Section>
  //   </IWebPage>
  // );
};

DynamicPage.getPageLayout = function getPageLayout(page) {
  return <LayoutRoot>{page}</LayoutRoot>;
};
