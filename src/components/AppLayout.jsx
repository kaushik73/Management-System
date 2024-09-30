import Home from "../pages/Home";
import Header from "../pages/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RequestForm from "./RequestForm";
import Search from "./Search";
import TaskList from "./TaskList";
import BaseLayout from "../components/BaseLayout"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AppLayout = ()=> {

    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <BaseLayout />,  
          children: [
            {
              path: "/",           
              element: <Home />
            },
            {
              path: "requestForm",  
              element: <RequestForm />
            },
            {
              path: "search",       
              element: <Search />
            },
            {
              path: "tasklist",     
              element: <TaskList />
            },
            {
                path: "signup",     
                element: <SignUp/>
              },
              {
                path: "signin",     
                element: <SignIn/>
              }
          ]
        }
      ]);
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
           )
}

export default AppLayout