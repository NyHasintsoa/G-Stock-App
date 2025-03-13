import { createBrowserRouter } from "react-router";
import AdminLayout from "./AdminLayout.jsx";
import ListProduct from "../pages/product/ListProduct/ListProduct.jsx";
import UpdateProduct from "../pages/product/UpdateProduct.jsx";
import Home from "../pages/home/Home.jsx";
import BaseLayout from "./BaseLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import RouteError from "../pages/route-error/RouteError.jsx";
import Layout from "./Layout.jsx";
import SignIn from "../pages/auth/signin.jsx";
import SignUp from "../pages/auth/SignUp.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import About from "../pages/about/About.jsx";
import AddProduct from "../pages/product/AddProduct/AddProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RouteError />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          }
        ]
      },
      {
        element: <Layout />,
        children: [
          {
            path: "/auth/signin",
            element: <SignIn />
          },
          {
            path: "/auth/signup",
            element: <SignUp />
          },
          {
            path: "/auth/recovery-account",
            element: <ForgotPassword />
          }
        ]
      }
    ]
  },
  {
    path: "/admin",
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: "products",
            element: <ListProduct />
          },
          {
            path: "products/new",
            element: <AddProduct />
          },
          {
            path: "products/update/:productId",
            element: <UpdateProduct />
          }
        ]
      }
    ]
  }
]);

export default router;
