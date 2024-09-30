import Header from "../pages/Header";
import Footer from "../pages/Footer";
import AppLayout from "./AppLayout";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  return (
    <>
      <Header  />
      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default BaseLayout;
