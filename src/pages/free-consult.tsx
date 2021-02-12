import { FreeConsultPage } from "@htc/components/feature/free-consult";
import { PageComponent } from "@htc/lib/page";
import React from "react";

const Page: PageComponent = (props) => {
  return <FreeConsultPage {...props} />;
};

Page.getPageLayout = FreeConsultPage.getPageLayout;

export default Page;
