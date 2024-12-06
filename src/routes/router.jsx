import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ArticleLayout from "../layouts/ArticleLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import ServiceLayout from "../layouts/ServiceLayout";
import Services from "../pages/Services";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import IndividualArticle from "../components/IndividualArticle";
import MyProfileLayout from "../layouts/MyProfileLayout";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/services",
    element: <Services></Services>,
  },
  {
    path: "/services/:id",
    element: (
      <PrivateRoute>
        <ServiceDetails></ServiceDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/articles",
    element: (
      <PrivateRoute>
        <ArticleLayout></ArticleLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/articles",
        element: <Navigate to={"/articles/1"}></Navigate>,
      },
      {
        path: "/articles/:id",
        element: <IndividualArticle></IndividualArticle>,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <MyProfileLayout></MyProfileLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
