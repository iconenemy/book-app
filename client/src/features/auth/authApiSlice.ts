import { apiSlice } from "../../app/api/apiSlice";
import { CreateBookForm } from "../../utils/validates/book.schema";
import { IBookCreate, IBookUpdate, IGetAllBooksByOwner, IGetOneBook, ISection } from "../book/book.type";
import { IGetAllUsers, IGetAllUsersByManager } from "../user/userType";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<void, void>({
      query: () => ({ url: "auth/logout" }),
    }),
    getAllBooksByOwner: builder.query<IGetAllBooksByOwner[], string>({
      query: (id) => ({ url: `book/owner/${id}` })
    }),
    getAllSection: builder.query<ISection[], void>({
      query: () => ({ url: 'section' })
    }),
    createBook: builder.mutation<void, IBookCreate>({
      query: ({ title, author, description, isbn, owner, page_count, section }) => ({
        url: 'book',
        method: 'POST',
        body: {
          title, author, description, isbn, owner, page_count, section
        } as CreateBookForm
      })
    }),
    getBookById: builder.query<IGetOneBook, string>({
      query: (id) => ({ url: `book/${id}` })
    }),
    deleteBookById: builder.mutation<void, string>({
      query: (id) => ({
        url: `book/${id}`,
        method: 'DELETE'
      })
    }),
    udpateBookById: builder.mutation<void, IBookUpdate>({
      query: ({
        id,
        title,
        author,
        description,
        isbn,
        page_count,
        owner,
        section
      }) => ({
        url: `book/${id}`,
        method: 'PUT',
        body: {
          title,
          author,
          description,
          isbn,
          page_count,
          owner,
          section
        }
      })
    }),
    getAllUsers: builder.query<IGetAllUsers[], void>({
      query: () => ({
        url: 'user'
      })
    }),
    getAllUsersByManager: builder.query<IGetAllUsersByManager, string>({
      query: (id) => ({
        url: `user/manager/${id}`
      })
    })
  }),
});

export const {
  useLogoutMutation,
  useGetAllBooksByOwnerQuery,
  useGetAllSectionQuery,
  useCreateBookMutation,
  useGetBookByIdQuery,
  useDeleteBookByIdMutation,
  useUdpateBookByIdMutation,
  useGetAllUsersQuery,
  useGetAllUsersByManagerQuery
} = authApiSlice;
