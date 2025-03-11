import { useParams } from "react-router";

function UpdateProduct() {
  const { productId } = useParams();
  return (
    <>
      <h1>Update Product {productId}</h1>
    </>
  );
}

export default UpdateProduct;
