import { Link } from "react-router";
import productImg from "../../assets/product.jpg";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="card min-h-64 max-h-64 overflow-hidden"
    >
      <img src={productImg} alt="Product Image" className="h-full" />
      <div className="px-3 pb-5 text-center">
        <h2 className="text-content2">{product.name}</h2>
        <p className="font-extrabold">{product.price} Ar</p>
      </div>
    </Link>
  );
}

export default ProductCard;
