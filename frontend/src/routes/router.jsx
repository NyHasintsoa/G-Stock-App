import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";
import BaseLayout from "./BaseLayout.jsx";
import AdminLayout from "./AdminLayout.jsx";
import Loader from "../components/loader/Loader.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Layout from "./Layout.jsx";
import Signin from "../pages/auth/Signin.jsx";
import SignUp from "../pages/auth/SignUp.jsx";
import SupplierProducts from "../pages/supplier/SupplierProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/supplier/products",
            element: <SupplierProducts />
          }
        ]
      },
      {
        element: <Layout />,
        children: [
          {
            path: "/auth/signin",
            element: <Signin />
          },
          {
            path: "/auth/signup",
            element: <SignUp />
          }
        ]
      }
    ]
  },
  {
    path: "/admin",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: "loader",
            element: <Loader />
          }
        ]
      }
    ]
  }
]);

export default router;
