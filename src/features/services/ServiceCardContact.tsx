import { Forms } from "@htc/components/content";
import { IServiceContact } from "@htc/lib/server/contentful";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = ({
  fields: { form }
}) => {
  return <Forms form={form} />;
};
