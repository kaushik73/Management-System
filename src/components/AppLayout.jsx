import Home from "../pages/Home";
import Header from "../pages/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RequestForm from "./RequestForm";
import Search from "./Search";
import TaskList from "./TaskList";

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
        },
        {
            path : "tasklist",
            element : <TaskList/>
        }
      ]);
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
           )
}

export default AppLayout