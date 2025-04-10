import { Link } from "react-router";

function StockListItems({ products }) {
  return (
    <>
      {Array.from(products).map((product, index) => (
        <tr key={index}>
          <th>{product.name}</th>
          <td>{product.price} Ar</td>
          <td>{product.supplier.name}</td>
          <td>{product.types_product.name}</td>
          <td>{product.stock ? product.stock.qte : 0}</td>
          <td className="flex gap-x-5">
            <Link
              to={`/admin/catalogs/products/${product.id}/edit`}
              className="text-blue-600"
            >
              Edit
            </Link>
            <Link
              to={`/admin/catalogs/products/${product.id}/show`}
              className="text-green-600"
            >
              Show
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
}

export default StockListItems;
