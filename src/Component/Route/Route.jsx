import {
    createBrowserRouter,
  } from "react-router-dom";
import Registration from "../../Page/Registration";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration/>,
    },
  ]);