import {Dispatch, SetStateAction } from "react";

export const useClearParams = (
  deleteByParam: string,
  setFilter: Dispatch<SetStateAction<string[]>>,
  setQuery: Function
) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  searchParams.delete(deleteByParam);
  setQuery(searchParams.toString());
  setFilter([]);
};
