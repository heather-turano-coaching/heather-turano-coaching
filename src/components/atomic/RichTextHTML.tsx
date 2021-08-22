import React, { FC } from "react";

import { TextStyles } from "./TextStyles";

export const RichTextHTML: FC<{
  htmlString: string;
}> = ({ htmlString }) => {
  return (
    <TextStyles>
      <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
    </TextStyles>
  );
};
