import { Link } from "react-router";
import productImg from "../../assets/product.jpg";

function ProductCard() {
  return (
    <Link
      to={"/product/123"}
      className="card min-h-64 max-h-64 overflow-hidden"
    >
      <img src={productImg} alt="Product Image" className="h-full" />
      <div className="px-3 pb-5 text-center">
        <h2 className="text-content2">Maximizing Your Productivity</h2>
        <p className="font-extrabold">123.000 Ar</p>
      </div>
    </Link>
  );
}

export default ProductCard;
