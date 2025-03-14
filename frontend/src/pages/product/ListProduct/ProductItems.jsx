import { Link } from "react-router";
import productPlaceholder from "../../../assets/product-placeholder.jpg";

function ProductItems({ products }) {
  return (
    <>
      {products.map((product, index) => (
        <tr key={index}>
          <td className="h-px w-auto whitespace-nowrap">
            <div className="ps-9 py-1">
              <div className="flex items-center gap-x-3">
                <img
                  className="inline-block size-11 rounded-lg"
                  src={
                    product.path_img !== null
                      ? "/api/upload/products/images/" + product.path_img
                      : productPlaceholder
                  }
                  alt="Product Image"
                />
                <div className="grow">
                  <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                    {product.designation}
                  </span>
                </div>
              </div>
            </div>
          </td>

          <td className="size-px whitespace-nowrap">
            <div className="ps-6 pe-30 py-1">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {product.unite}
              </span>
            </div>
          </td>
          <td className="size-px whitespace-nowrap">
            <div className="ps-6 pe-30 py-1">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                {product.category}
              </span>
            </div>
          </td>
          <td className="size-px whitespace-nowrap">
            <div className="ps-6 pe-30 py-1">
              <span className="text-sm text-gray-500 dark:text-neutral-500">
                {product.price} Ar
              </span>
            </div>
          </td>
          <td className="size-px whitespace-nowrap">
            <div className="px-6 py-1.5">
              <Link
                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                to={"/admin/products/update/" + product.id}
              >
                Edit
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ProductItems;
