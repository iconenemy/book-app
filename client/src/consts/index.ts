const registerBenefits = [
  "Check out faster with your saved details",
  "Manage your book collection",
  "Exchange books with other users",
];

const tableHeader = [
  {id: 1, table_name: ''},
  {id: 2, table_name: 'Email'},
  {id: 3, table_name: 'First name'},
  {id: 4, table_name: 'Lirst name'},
  {id: 5, table_name: 'Role'},
]

const bookHeader = [
  {id: 1, headerName: 'Title'},
  {id: 2, headerName: 'Author'},
  {id: 3, headerName: 'Page count'},
  {id: 4, headerName: 'ISBN'},
]

enum ROUTE {
  ABSOLUTE = "/",
  HOME = "/",
  LOADING = "loading",
  ACCOUNT = "my-account",
  AUTH = "sign-in-register",
  OVERVIEW = "overview",
  PROFILE = "profile",
  BOOKS = "books",
  CRM = "crm",
  MANAGER = "manager",
  ADMIN = "admin",
  LIBRARY = "library",
  COLLECTION = "my-collection",
  CREATE_BOOK = "create-book",
  EDIT_BOOK = "edit-book/:id",
  MANAGER_ABSOLUTE = "/crm/manager",
  ADMIN_ABSOLUTE = "/crm/admin",
  BOOK_INFO = "/books/library/book-info/:id",
  LIBRARY_ABSOLUTE = "/books/library",
  BOOK_INFO_ABSOLUTE = "/books/library/book-info",
  COLLECTION_ABSOLUTE = "/books/my-collection",
  BOOK_MANAGE = "/books/my-collection/manage",
  BOOK_MANAGE_ABSOLUTE = "/books/my-collection/manage",
  BOOK_MANAGE_EDIT_ABSOLUTE = "/books/my-collection/manage/edit-book",
  BOOK_MANAGE_CREATE_ABSOLUTE = "/books/my-collection/manage/create-book",
  AUTH_ABSOLUTE = "/my-account/sign-in-register",
  OVERVIEW_ABSOLUTE = "/my-account/overview",
  PROFILE_ABSOLUTE = "/my-account/profile",
}

export {
  registerBenefits,
  ROUTE,
  tableHeader,
  bookHeader
};
