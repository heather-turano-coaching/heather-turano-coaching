import { format, getDayOfYear } from "date-fns";
import { get as lodashGet } from "lodash";

type AggregateItemsByDay<ItemType> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [key in number]: {
    date: string;
    formattedDate: string;
    formattedTime: string;
    items: ItemType[];
  };
};

const today = new Date();
const todayDayOfYear = getDayOfYear(today);

export const aggregateListByDay = <Obj>(
  list: Obj[],
  dateKey: string
): AggregateItemsByDay<Obj> => {
  return list.reduce<AggregateItemsByDay<Obj>>((accum, listItem) => {
    const startOfNewLocation = new Date(lodashGet(listItem, dateKey));

    const dayOfYear = getDayOfYear(startOfNewLocation);
    const formattedDate =
      todayDayOfYear !== dayOfYear
        ? format(startOfNewLocation, "PPP")
        : `Today, ${format(startOfNewLocation, "PPP")}`;
    const formattedTime = `${format(startOfNewLocation, "pp")} EST`;
    if (accum[dayOfYear]) {
      return {
        ...accum,
        [dayOfYear]: {
          ...accum[dayOfYear],
          items: [...accum[dayOfYear].items, listItem]
        }
      };
    }

    return {
      ...accum,
      [dayOfYear]: {
        date: lodashGet(listItem, dateKey),
        // need to format this
        formattedDate,
        formattedTime,
        items: [listItem]
      }
    };
  }, {});
};
