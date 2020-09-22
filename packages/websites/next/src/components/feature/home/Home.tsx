import { IPageHome } from "models/contentful";
import { FC } from "react";

export const PageHome: FC<IPageHome> = (props) => {
  console.log(props);
  return <div>hello</div>;
};
