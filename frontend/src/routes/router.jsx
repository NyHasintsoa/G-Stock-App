import { createBrowserRouter } from "react-router";
import AdminLayout from "./AdminLayout.jsx";
import ListProduct from "../pages/product/ListProduct/ListProduct.jsx";
import AddProduct from "../pages/product/AddProduct.jsx";
import UpdateProduct from "../pages/product/UpdateProduct.jsx";

const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/products",
        element: <ListProduct />
      },
      {
        path: "/products/new",
        element: <AddProduct />
      },
      {
        path: "/products/update/:productId",
        element: <UpdateProduct />
      }
    ]
  }
]);

export default router;
