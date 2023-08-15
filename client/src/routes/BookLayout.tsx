import { createContext } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import { ScrollUp } from "../components/navigation";
import Filter from "../components/filter/Filter";

import {
    Description,
    InPageHeader,
    BookCounter,
} from "../components/books";


interface IQueryParamsContext {
    queryParams: URLSearchParams;
    setQueryParams: Function;
}

export const ParamsContext = createContext<IQueryParamsContext>({
    queryParams: new URLSearchParams(),
    setQueryParams() { },
});


const BookLayout = () => {
    const [queryParams, setQueryParams] = useSearchParams(new URLSearchParams());

    return (
        <ParamsContext.Provider value={{ queryParams, setQueryParams }}>
            <InPageHeader />
            <Filter />
            <BookCounter />
            <Outlet />
            <Description />
            <ScrollUp />
        </ParamsContext.Provider>
    )
}

export default BookLayout