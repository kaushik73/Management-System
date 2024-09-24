import Header from "../pages/Header";
import Footer from "../pages/Footer";
import AppLayout from "./AppLayout";
import { Outlet } from 'react-router-dom';
const BaseLayout = () => {

    return (
        <>
          <Header className="flex flex-col min-h-screen" />
          <main className="flex-grow">
        {/* Outlet will render the matched route component */}
        <Outlet />
      </main>
          <Footer/>
        </>
      );
}

export default BaseLayout;