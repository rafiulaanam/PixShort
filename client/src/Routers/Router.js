import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <p></p>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
