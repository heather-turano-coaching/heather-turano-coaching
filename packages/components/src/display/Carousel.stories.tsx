import React, { FC, useState } from "react";

import { Carousel, CarouselFooter } from "./Carousel";

export default {
  component: Carousel,
  title: "Display|Carousel"
};

const items = ["item1", "item2", "item3", "item4"];

export const base: FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentEntry, setCurrentEntry] = useState<number>(0);
  const goToEntry = (index: number) => setCurrentEntry(index);

  return (
    <div>
      <Carousel>
        <div>{items[currentEntry]}</div>
        <CarouselFooter
          entries={items}
          currentEntry={currentEntry}
          goToEntry={goToEntry}
          activeColor={{ scalable: { color: "secondary", scale: 0 } }}
        />
      </Carousel>
    </div>
  );
};
