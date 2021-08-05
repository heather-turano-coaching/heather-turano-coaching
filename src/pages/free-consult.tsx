import { PageComponent } from "@htc/lib/page";
import { NextSeo } from "next-seo";
import React from "react";
import { FreeConsultPage } from "src/features/free-consult";

const Page: PageComponent = (props) => {
  return (
    <>
      <NextSeo
        title="Free 30-Minute Consultation"
        description="Sign up for a free 30 minute consultation to understand and learn how Heather can help you."
      />

      <FreeConsultPage {...props} />
    </>
  );
};

Page.getPageLayout = FreeConsultPage.getPageLayout;

export default Page;
