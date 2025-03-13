const getAllCategories = async () => {
  const r = await fetch(`/api/categories`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  if (r.ok) return r.json();
  throw new Error("Error");
};

export { getAllCategories };
