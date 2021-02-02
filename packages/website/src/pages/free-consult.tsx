import { FreeConsultPage } from "components/feature/free-consult";
import { PageComponent } from "lib/page";
import React from "react";

const Page: PageComponent = (props) => {
  return <FreeConsultPage {...props} />;
};

Page.getPageLayout = FreeConsultPage.getPageLayout;

export default Page;
