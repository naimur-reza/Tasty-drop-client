import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main";
import Home from "../../pages/home/Home";
import Rider from "../../pages/rider/Rider";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUp from "../../pages/signup/SignUp";
import ScrollToTop from "../../components/ScrollToTop";
import Partner from "../../pages/partner/Partner";
import Worker from "../../pages/Worker/Worker";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ScrollToTop></ScrollToTop>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "riders",
        element: <Rider></Rider>,
      },
      {
        path: "partners",
        element: <Partner></Partner>,
      },
      {
        path: "teams",
        element: <Worker></Worker>,
      },

      // Login & Signup Routes
      {
        path: "/loginpage",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
