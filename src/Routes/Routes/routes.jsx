import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/ErrorPage/Error";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Checkout from "../../Pages/Checkout/Checkout";
import Orders from "../../Pages/Orders/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(
            `https://genius-car-server-jade-rho.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);
