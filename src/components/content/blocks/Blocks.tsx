import {
  IBlock,
  IBlockGrabber,
  IBlockImageRow,
  IBlockPictureGrid,
  IBlockTestimonial,
  IWebPageFields
} from "@htc/lib/contentful";
import React, { FC, Fragment } from "react";

import { BlockGrabber } from "./BlockGrabber";
import { BlockImageRow } from "./BlockImageRow";
import { BlockPictureGrid } from "./BlockPictureGrid";
import { BlockSimple } from "./BlockSimple";
import { BlockTestimonial } from "./BlockTestimonial";

export const Blocks: FC<{ blocks: IWebPageFields["blocks"] }> = ({
  blocks
}) => {
  if (!blocks) {
    return null;
  }
  return (
    <>
      {blocks.map((block) => (
        <Fragment key={block.sys.id}>
          {(() => {
            const blockType = block.sys.contentType.sys.id;
            if (blockType === "block")
              return <BlockSimple {...(block as IBlock)} />;

            if (blockType === "blockGrabber")
              return <BlockGrabber {...(block as IBlockGrabber)} />;

            if (blockType === "blockImageRow")
              return <BlockImageRow {...(block as IBlockImageRow)} />;

            if (blockType === "blockPictureGrid")
              return <BlockPictureGrid {...(block as IBlockPictureGrid)} />;

            if (blockType === "blockTestimonial")
              return <BlockTestimonial {...(block as IBlockTestimonial)} />;

            // eslint-disable-next-line no-console
            console.error(
              "You should not be seeing this error. A block type wasn't properly mapped."
            );
            return null;
          })()}
        </Fragment>
      ))}
    </>
  );
};
