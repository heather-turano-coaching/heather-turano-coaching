import { Entry } from "contentful";
import { FC } from "react";

export const PageHome: FC<Entry<{}>> = (props) => {
  console.log(props);
  return <div>hello</div>;
};
