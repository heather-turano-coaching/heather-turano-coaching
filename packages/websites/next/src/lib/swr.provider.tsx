import React, { FC } from "react";
import { ConfigInterface, SWRConfig } from "swr";

/**
 * Global config for fetching all data
 * and client side http cache
 */
const swrConfig: ConfigInterface = {
  refreshInterval: 30000
};

export const SWRProvider: FC = ({ children }) => (
  <SWRConfig value={swrConfig}>{children}</SWRConfig>
);
