import { createContext, useContext } from 'react'

interface IQueryParamsContext {
    query: URLSearchParams
    setQuery: Function
}

const QueryParamsContext = createContext<IQueryParamsContext | null>(null)

export const useQueryParams = () => {
    const queryParamsContext = useContext(QueryParamsContext)

    if (!queryParamsContext) {
        throw new Error("quaryParams has to be used within <QueryParamsContext.Provider>")
    }

    return queryParamsContext
}