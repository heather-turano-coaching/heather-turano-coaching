import { GetStaticProps } from "next";

import { withPage } from "../../lib";
import { HomePage, HomePageProps } from "../features/home";
import { getCategoryDocs } from "../utils-server";

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const categoryDocs = getCategoryDocs();

  return {
    props: {
      categoryDocs: categoryDocs
    }
  };
};

export default withPage(HomePage);
