import { RefObject, useEffect, useState } from "react";

export function useSticky<RefType extends HTMLElement>({
  offset = 0,
  ref = null,
  testId
}: {
  offset?: number;
  ref: RefObject<RefType> | null;
  testId?: string;
}): boolean {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const top = 0 + offset;
        const position = ref.current.getBoundingClientRect().top;
        const stick = position < top;
        if (testId && testId === ref.current.id) {
          // console.log("top", top);
          // console.log("position", position);
          // console.log("stick", stick);
          // console.group("Sticky Values");
          // console.groupEnd();
        }
        setSticky(stick);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [offset, ref, testId]);

  return isSticky;
}
