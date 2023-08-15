import { lazy } from "react";

const Home = lazy(() => import("./Home"));
import CRMLayout from "./CRMLayout";
import Loading from "./Loading";
import Layout from "./Layout";
import NotFound from "./NotFound";
const Profile = lazy(() => import("./Profile"));
const Auth = lazy(() => import("./Auth"));
const Account = lazy(() => import("./Account"));
const Overview = lazy(() => import("./Overview"));
const Library = lazy(() => import("./Library"));
const ManagerCRM = lazy(() => import("./ManagerCRM"));
const BookLayout = lazy(() => import("./BookLayout"));
const Collection = lazy(() => import("./Collection"));
const CreateBook = lazy(() => import("./CreateBook"));
const EditBook = lazy(() => import("./EditBook"));
const BookInfo = lazy(() => import("./BookInfo"));
const BookManageLayout = lazy(() => import("./BookManageLayout"));

export {
  Home,
  Auth,
  Layout,
  Loading,
  Profile,
  Account,
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
};
