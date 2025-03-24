import { Link } from "react-router";

function SupplierCard({ supplier }) {
  return (
    <Link to={`/supplier/${supplier.id}/products`} className="card">
      <div className="card-body text-center">
        <h2 className="text-center font-bold text-xl">{supplier.name}</h2>
        <div className="text-gray-600">{supplier.address}</div>
      </div>
    </Link>
  );
}

export default SupplierCard;
