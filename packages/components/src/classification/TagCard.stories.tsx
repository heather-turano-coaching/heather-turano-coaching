/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { TagCard } from "./TagCard";
import { TagGroup } from "./TagGroup";

export default {
  component: TagCard,
  title: "Classification|Tag Card",
};

export const category = () => <TagCard type="category" name="Motherhood" />;
export const categoryWithDescription = () => (
  <TagCard
    type="category"
    name="Motherhood"
    description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
  />
);
export const tag = () => <TagCard type="tag" name="Motherhood" />;
export const tagWithDescription = () => (
  <TagCard
    type="tag"
    name="Motherhood"
    description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
  />
);
export const tagInGroup = () => (
  <TagGroup>
    <a>
      <TagCard type="tag" name="region" />
    </a>
    <a>
      <TagCard type="tag" name="buy" />
    </a>
    <a>
      <TagCard type="tag" name="difficulty" />
    </a>
    <a>
      <TagCard type="tag" name="community" />
    </a>
    <a>
      <TagCard type="tag" name="build" />
    </a>
    <a>
      <TagCard type="tag" name="bicycle" />
    </a>
    <a>
      <TagCard type="tag" name="hay" />
    </a>
    <a>
      <TagCard type="tag" name="stairs" />
    </a>
    <a>
      <TagCard type="tag" name="done" />
    </a>
    <a>
      <TagCard type="tag" name="report" />
    </a>
    <a>
      <TagCard type="tag" name="curious" />
    </a>
    <a>
      <TagCard type="tag" name="drive" />
    </a>
    <a>
      <TagCard type="tag" name="gun" />
    </a>
    <a>
      <TagCard type="tag" name="torn" />
    </a>
    <a>
      <TagCard type="tag" name="among" />
    </a>
    <a>
      <TagCard type="tag" name="pleasure" />
    </a>
    <a>
      <TagCard type="tag" name="climb" />
    </a>
  </TagGroup>
);
export const categoryInGroup = () => (
  <TagGroup>
    <a>
      <TagCard type="category" name="region" />
    </a>
    <a>
      <TagCard type="category" name="buy" />
    </a>
    <a>
      <TagCard type="category" name="difficulty" />
    </a>
    <a>
      <TagCard type="category" name="community" />
    </a>
    <a>
      <TagCard type="category" name="build" />
    </a>
    <a>
      <TagCard type="category" name="bicycle" />
    </a>
    <a>
      <TagCard type="category" name="hay" />
    </a>
    <a>
      <TagCard type="category" name="stairs" />
    </a>
    <a>
      <TagCard type="category" name="done" />
    </a>
    <a>
      <TagCard type="category" name="report" />
    </a>
    <a>
      <TagCard type="category" name="curious" />
    </a>
    <a>
      <TagCard type="category" name="drive" />
    </a>
    <a>
      <TagCard type="category" name="gun" />
    </a>
    <a>
      <TagCard type="category" name="torn" />
    </a>
    <a>
      <TagCard type="category" name="among" />
    </a>
    <a>
      <TagCard type="category" name="pleasure" />
    </a>
    <a>
      <TagCard type="category" name="climb" />
    </a>
  </TagGroup>
);
export const groupOfCategoryWithDescription = () => (
  <TagGroup>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
    <a>
      <TagCard
        type="category"
        name="Motherhood"
        description="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
      />
    </a>
  </TagGroup>
);
