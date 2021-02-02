import format from "date-fns/format";

export const formatLongDate = (dateString: string): string =>
  format(new Date(dateString), "MMM do, y");
