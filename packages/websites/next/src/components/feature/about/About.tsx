import { IPageAbout } from "models/contentful";
import { FC } from "react";

export const PageAbout: FC<IPageAbout> = (props) => {
  console.log(props);
  return <div>about</div>;
};
