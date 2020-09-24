import { format } from "date-fns";

export const throwError = (message: string, error: string): string => {
  throw new Error(`${message}: ${error}`);
};

export const formatShortDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "PPP");
};
