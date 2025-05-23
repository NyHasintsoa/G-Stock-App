import { Link } from "react-router";

function ProductListItems({ products }) {
  return (
    <>
      {Array.from(products).map((product, index) => (
        <tr key={index}>
          <th>{product.name}</th>
          <td>{product.price} Ar</td>
          <td>{product.supplier.name}</td>
          <td>
            <span className="badge badge-flat-primary">
              {product.types_product.name}
            </span>
          </td>
          <td className="flex gap-x-5">
            <Link
              to={`/admin/catalogs/products/${product.id}/edit`}
              className="text-blue-600"
            >
              Edit
            </Link>
            <label
              className="text-green-600 hover:cursor-pointer"
              htmlFor="modal-product-show"
            >
              Show
            </label>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ProductListItems;
