import { useParams } from "react-router";

function EditProductAdmin() {
  const { idProduct } = useParams();

  return (
    <>
      <h1>Edit Product</h1>
      <p>{idProduct}</p>
    </>
  );
}

export default EditProductAdmin;
