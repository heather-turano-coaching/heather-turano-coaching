import { AweberForm, AweberFormProps } from "@htc/components/atomic";
import { IForm } from "@htc/lib/server/contentful";
import { FC } from "react";

export const Forms: FC<{ form?: IForm } & AweberFormProps> = ({
  form,
  ...restProps
}) => {
  if (form && form.fields) {
    return <AweberForm formScript={form.fields.embeddedLink} {...restProps} />;
  }
  return null;
};
