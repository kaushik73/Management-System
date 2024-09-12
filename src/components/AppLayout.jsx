import Home from "../pages/Home";
import Header from "../pages/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = ()=> {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "header",
            element : <Header/>
        }
      ]);
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
           )
}

export default AppLayout