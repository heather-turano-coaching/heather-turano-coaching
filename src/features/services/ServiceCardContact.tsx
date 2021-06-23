import { Forms } from "@htc/components/content";
import { IServiceContact } from "@htc/lib/contentful";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = ({
  fields: { form }
}) => {
  return <Forms form={form} />;
};
