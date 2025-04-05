import { Link } from "react-router";

function TypeListItems({ typesProduct }) {
  return (
    <>
      {Array.from(typesProduct).map((item, index) => (
        <tr key={index}>
          <th>{item.name}</th>
          <td className="flex gap-x-5">
            <Link
              to={`/admin/catalogs/products/${item.id}/edit`}
              className="text-blue-600"
            >
              Edit
            </Link>
            <Link
              to={`/admin/catalogs/products/${item.id}/show`}
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

export default TypeListItems;
