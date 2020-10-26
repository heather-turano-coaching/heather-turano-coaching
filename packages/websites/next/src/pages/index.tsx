import { HomePage, HomePageProps } from "components/feature/home";
import { contentfulClient } from "lib/contentful";
import { PageComponent } from "lib/page";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "7lfP0Xk3qXQIjAzpm9yJ8H"
  )) as HomePageProps["data"];

  return {
    props: {
      data
    }
  };
};

const Page: PageComponent<HomePageProps> = (props) => {
  return <HomePage {...props} />;
};

Page.getPageLayout = HomePage.getPageLayout;

export default Page;
