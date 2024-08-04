import {
    createBrowserRouter,
  } from "react-router-dom";
import Registration from "../../Page/Registration";
import SignIn from "../../Page/SignIn/SignIn";
import Dashboard from "../../Page/Dashboard/Dashboard";
import Transactions from "../../Page/Dashboard/Transactions/Transactions";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>,
    },
    {
      path: "/registration",
      element: <Registration/>,
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "transactions",
          element: <Transactions/>
        },
      ]
    },

  ]);