import { Dispatch, SetStateAction } from "react";

export const useFilterParams = (
  sortedId: string,
  searchedByParam: string,
  setFilter: Dispatch<SetStateAction<string[]>>,
  setQuery: Function
) => {
  const url = new URL(window.location.href);
  const allQuery = new URLSearchParams(url.search);
  const searchQuery = allQuery.getAll(searchedByParam);
  const findQuery = searchQuery.find((item) => item === sortedId);

  if (findQuery) {
    const newQuery = new URLSearchParams();
    allQuery.forEach((value, key) =>
      value !== sortedId ? newQuery.append(key, value) : value
    );
    setQuery(newQuery);
    setFilter((prev) => prev.filter((item) => item !== sortedId));
  } else {
    allQuery.append(searchedByParam, sortedId);
    setQuery(allQuery);
    setFilter((prev) => [...prev, sortedId]);
  }
};
