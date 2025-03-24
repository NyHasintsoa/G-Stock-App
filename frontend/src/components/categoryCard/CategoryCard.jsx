import { Link } from "react-router";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.id}/products`} className="card">
      <div className="card-body text-center">
        <h2 className="text-center font-bold text-xl">{category.name}</h2>
      </div>
    </Link>
  );
}

export default CategoryCard;
