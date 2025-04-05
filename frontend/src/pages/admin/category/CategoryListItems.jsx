import { Link } from "react-router";

function CategoryListItems({ categories }) {
  return (
    <>
      {Array.from(categories).map((category, index) => (
        <tr key={index}>
          <th>{category.name}</th>
          <td className="flex gap-x-5">
            <Link
              to={`/admin/catalogs/suppliers/${category.id}/edit`}
              className="text-blue-600"
            >
              Edit
            </Link>
            <Link
              to={`/admin/catalogs/suppliers/${category.id}/show`}
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

export default CategoryListItems;
