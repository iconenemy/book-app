import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components/layout";
import { Loading } from ".";
import { useScrollToTop } from "../hooks";

const Layout = () => {
  useScrollToTop()

  return (
    <div className="box-border p-0 m-0">
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
