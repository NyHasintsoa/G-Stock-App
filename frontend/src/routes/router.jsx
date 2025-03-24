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
import ListSupplier from "../pages/supplier/ListSupplier.jsx";
import ListCategory from "../pages/category/ListCategory.jsx";
import CategoryProducts from "../pages/category/CategoryProducts.jsx";
import ProductInfo from "../pages/product/ProductInfo.jsx";

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
            path: "/supplier",
            element: <ListSupplier />
          },
          {
            path: "/supplier/:idSupplier/products",
            element: <SupplierProducts />
          },
          {
            path: "/category",
            element: <ListCategory />
          },
          {
            path: "/category/:idcategory/products",
            element: <CategoryProducts />
          },
          {
            path: "/product/:idProduct",
            element: <ProductInfo />
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
