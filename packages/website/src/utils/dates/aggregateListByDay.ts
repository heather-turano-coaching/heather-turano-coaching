import { format, getDayOfYear } from "date-fns";

import { getPropertyFromObj } from "../getPropertyFromObj";

export type AggregateItemsByDay<ItemType> = {
  [key in string]: {
    date: string;
    formattedDate: string;
    formattedTime: string;
    items: ItemType[];
  };
};

const pad = (num: number) => {
  let numStr = num.toString();
  while (numStr.length < 3) {
    numStr = `0${numStr}`;
  }
  return numStr;
};

const getDateComparator = (date: Date) => {
  const dayOfYear = getDayOfYear(date);
  let year = date.getUTCFullYear();
  if (dayOfYear === 366) {
    year = year - 1;
  }
  return `${year}.${pad(dayOfYear)}`;
};

const today = new Date();
const todayDayOfYear = getDateComparator(today);

export const aggregateListByDay = <Obj>(
  list: Obj[],
  dateKey: string
): AggregateItemsByDay<Obj> => {
  return list.reduce<AggregateItemsByDay<Obj>>((accum, listItem) => {
    const startOfNewLocation = new Date(
      getPropertyFromObj<Obj>(listItem, dateKey, null)
    );

    const dayOfYear = getDateComparator(startOfNewLocation);
    const formattedDate =
      todayDayOfYear !== dayOfYear
        ? format(startOfNewLocation, "eeee, P")
        : `Today, ${format(startOfNewLocation, "P")}`;
    const formattedTime = format(startOfNewLocation, "p");
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
        date: getPropertyFromObj<Obj>(listItem, dateKey, null),
        // need to format this
        formattedDate,
        formattedTime,
        items: [listItem]
      }
    };
  }, {});
};
