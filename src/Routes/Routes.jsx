import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Signup from "../Pages/Home/Signup/Signup";
import Blog from "../Pages/Home/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "alltoys",
        element: (
          <PrivateRoute>
            <AllToys></AllToys>
          </PrivateRoute>
        ),
      },
      //   {
      //     path: "mytoys",
      //     element: <MyToys></MyToys>,
      //   },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/category/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
