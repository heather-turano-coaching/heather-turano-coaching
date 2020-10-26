import { AboutPage, AboutPageProps } from "components/feature/about";
import { contentfulClient } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<AboutPageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "1d8Op07qxu9UPPUEYdDcbE"
  )) as AboutPageProps["data"];

  return {
    props: {
      pageTitle: "About",
      data
    }
  };
};

const Page: PageComponent<AboutPageProps> = (props) => {
  return <AboutPage {...props} />;
};

Page.getPageLayout = AboutPage.getPageLayout;

export default Page;
