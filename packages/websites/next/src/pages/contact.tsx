import { PageContact } from "components/feature/contact";
import { Meta, MetaProps } from "components/feature/meta";
import { IPageContact, contentfulClient } from "lib/contentful";
import { GetServerSideProps } from "next";

export type ContactPageProps = MetaProps & {
  data: IPageContact;
};

export const getServerSideProps: GetServerSideProps<ContactPageProps> = async () => {
  const data = (await contentfulClient.getEntry(
    "39iIaovpEKNp3BR6YjrMTL"
  )) as IPageContact;

  return {
    props: {
      pageTitle: "About",
      data
    }
  };
};

export default function ContactPage({ pageTitle, data }: ContactPageProps) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <PageContact {...data} />
    </>
  );
}
