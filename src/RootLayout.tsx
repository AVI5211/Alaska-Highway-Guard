import React from "react";
import Head from "./components/Head";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
const RootLayout = (): JSX.Element => {
  return (
    <>
      <div className="min-h-full w-full flex flex-col">
        <Head />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
