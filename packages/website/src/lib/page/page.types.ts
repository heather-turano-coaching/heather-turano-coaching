import { ReactNode } from "react";

export type PageComponent<P = Record<string, unknown>> = React.FC<P> & {
  getPageLayout: (page: ReactNode) => ReactNode;
};
