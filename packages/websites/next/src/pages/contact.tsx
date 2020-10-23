import { ContactPage, ContactPageProps } from "components/feature/contact";
import { contentfulClient } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps<ContactPageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "39iIaovpEKNp3BR6YjrMTL"
  )) as ContactPageProps["data"];

  return {
    props: {
      data
    }
  };
};

const Page: PageComponent<ContactPageProps> = (props) => {
  return <ContactPage {...props} />;
};

Page.getPageLayout = ContactPage.getPageLayout;

export default Page;
