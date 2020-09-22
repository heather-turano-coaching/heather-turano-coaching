import { IPageService } from "models/contentful";
import { FC } from "react";

export const PageServices: FC<IPageService> = (props) => {
  console.log(props);
  return <div>services</div>;
};
