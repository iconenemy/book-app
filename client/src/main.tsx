import "./index.css";

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./app/store";
import {
  Home,
  Auth,
  Layout,
  Profile,
  Account,
  Loading,
  Overview,
  NotFound,
  CRMLayout,
  ManagerCRM,
  Library,
  BookLayout,
  Collection,
  CreateBook,
  BookManageLayout,
  EditBook,
  BookInfo
} from "./routes";
import { ROUTE } from "./consts";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme";
import AdminCRM from "./routes/AdminCRM";

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTE.BOOKS,
        element: <BookLayout />,
        children: [
          {
            path: ROUTE.LIBRARY,
            element: <Library />,
          },
          {
            path: ROUTE.COLLECTION,
            element: <Collection />,
          }
        ],
      },
      {
        path: ROUTE.BOOK_INFO,
        element: <BookInfo />
      },
      {
        path: ROUTE.BOOK_MANAGE,
        element: <BookManageLayout />,
        children: [
          {
            path: ROUTE.CREATE_BOOK,
            element: <CreateBook />
          },
          {
            path: ROUTE.EDIT_BOOK,
            element: <EditBook />
          }
        ]
      },
      {
        path: ROUTE.ACCOUNT,
        element: <Account />,
        children: [
          {
            path: ROUTE.AUTH,
            element: <Auth />,
          },
          {
            path: ROUTE.OVERVIEW,
            element: <Overview />,
          },
          {
            path: ROUTE.PROFILE,
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTE.LOADING,
    element: <Loading />,
  },
  {
    path: ROUTE.CRM,
    element: <CRMLayout />,
    children: [
      {
        path: ROUTE.MANAGER,
        element: <ManagerCRM />
      },
      {
        path: ROUTE.ADMIN,
        element: <AdminCRM />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
