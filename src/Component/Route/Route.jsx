import {
    createBrowserRouter,
  } from "react-router-dom";
import Registration from "../../Page/Registration";
import SignIn from "../../Page/SignIn/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>,
      // children:
    },
    {
      path: "/registration",
      element: <Registration/>,
    },
  ]);