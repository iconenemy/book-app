import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAllBooksRes } from './book.type'

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/book' }),
    endpoints: (builder) => ({
        getBooksCount: builder.query<number, null>({
            query: () => 'count',
        }),
        getAllBooks: builder.query<IAllBooksRes[], void>({
            query: () => '/'
        }),
    }),
})

export const { useGetBooksCountQuery, useGetAllBooksQuery } = bookApi
