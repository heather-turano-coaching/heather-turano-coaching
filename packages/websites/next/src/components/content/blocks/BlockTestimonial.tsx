import { IBlockTestimonial } from "lib/contentful";
import { FC } from "react";

export const BlockTestimonial: FC<IBlockTestimonial> = (props) => (
  <div>{JSON.stringify(props, null, 4)}</div>
);
