import React, { FC } from "react";
import { SWRConfig } from "swr";

import { api } from "../api";

/**
 * Global config for fetching all data
 * and client side http cache
 */
const swrConfig = {
  refreshInterval: 30000,
  revalidateOnMount: true,
  fetcher: async (url: string) => {
    const data = await api.get(url);
    return data.data;
  }
};

export const SWRProvider: FC = ({ children }) => (
  <SWRConfig value={swrConfig}>{children}</SWRConfig>
);
