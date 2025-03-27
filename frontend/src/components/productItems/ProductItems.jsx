import ProductCard from "../productCard/ProductCard.jsx";

function ProductItems({ products }) {
  return (
    <>
      {Array.from(products, (product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </>
  );
}

export default ProductItems;
