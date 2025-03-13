/**
 * Get All Products
 * @return {Promise}
 */
const getAllProducts = async () => {
  const r = await fetch(`/api/products`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  if (r.ok) return r.json();
  throw new Error("Error");
};

const addProduct = async (data) => {
  const r = await fetch(`/api/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (r.ok) return r.json();
  throw new Error("Error");
};

export { getAllProducts, addProduct };
