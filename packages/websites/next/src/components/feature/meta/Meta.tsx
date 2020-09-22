import Head from "next/head";
import { FC } from "react";

export type MetaProps = { pageTitle: string };

export const Meta: FC<MetaProps> = ({ pageTitle }) => (
  <Head>
    <title>{pageTitle}</title>
  </Head>
);
