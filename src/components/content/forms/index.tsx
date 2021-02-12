import { IForm } from "@htc/domain/contentful";
import { AweberForm, AweberFormProps } from "components/atomic";
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
