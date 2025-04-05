import { Link } from "react-router";

function SupplierListItems({ suppliers }) {
  return (
    <>
      {Array.from(suppliers).map((supplier, index) => (
        <tr key={index}>
          <th>{supplier.name}</th>
          <td className="flex gap-x-5">
            <Link
              to={`/admin/catalogs/suppliers/${supplier.id}/edit`}
              className="text-blue-600"
            >
              Edit
            </Link>
            <Link
              to={`/admin/catalogs/suppliers/${supplier.id}/show`}
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

export default SupplierListItems;
