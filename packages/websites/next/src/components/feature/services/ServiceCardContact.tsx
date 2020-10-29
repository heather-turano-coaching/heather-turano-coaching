import { IServiceContact } from "@heather-turano-coaching/domain";
import { FC } from "react";

export const ServiceCardContact: FC<IServiceContact> = (props) => {
  return <div>{JSON.stringify(props, null, 4)}</div>;
};
