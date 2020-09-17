import {
  ResponsiveBreakpoints,
  responsiveBreakpoints
} from "@heather-turano-coaching/design-system";
import { useEffect, useState } from "react";

export const useBreakpoints = (
  userDefinedBreakpoints?: ResponsiveBreakpoints
): [number, ResponsiveBreakpoints] => {
  const mediaBreakpoints = userDefinedBreakpoints || responsiveBreakpoints;
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = (): void => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [windowWidth, mediaBreakpoints];
};
