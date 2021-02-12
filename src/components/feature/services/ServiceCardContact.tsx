import { IServiceContact } from "@htc/domain/contentful";
import { Forms } from "components/content/forms";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = ({
  fields: { form }
}) => {
  return <Forms form={form} />;
};
