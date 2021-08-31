import { useState } from "react";

type ProgressiveLoaderHook = <ListType>({
  list,
  initialLimit,
  loadIncrement
}: {
  list: ListType[];
  initialLimit?: number;
  loadIncrement?: number;
}) => [ListType[], () => void, boolean];

export const useProgressiveLoader: ProgressiveLoaderHook = ({
  list: originalList,
  initialLimit = 5,
  loadIncrement = 5
}) => {
  const [moreListItemsExist, setMoreListItemsExist] = useState(
    originalList.length > initialLimit
  );
  const [currentList, setCurrentList] = useState([
    ...originalList.slice(0, initialLimit)
  ]);

  const loadNextSetOfListItems = () => {
    const currentListLength = currentList.length;
    const nextListItems =
      currentListLength < originalList.length
        ? originalList.slice(
            currentListLength,
            currentListLength + loadIncrement
          )
        : [];
    setMoreListItemsExist(
      currentListLength + loadIncrement < originalList.length
    );
    setCurrentList([...currentList, ...nextListItems]);
  };

  return [currentList, loadNextSetOfListItems, moreListItemsExist];
};
