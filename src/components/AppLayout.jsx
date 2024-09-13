import Home from "../pages/Home";
import Header from "../pages/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RequestForm from "./RequestForm";
import Search from "./Search";

const AppLayout = ()=> {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "header",
            element : <Header/>
        },
        {
            path : "requestForm",
            element : <RequestForm/>
        },
        {
            path : "search",
            element : <Search/>
        }
      ]);
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
           )
}

export default AppLayout