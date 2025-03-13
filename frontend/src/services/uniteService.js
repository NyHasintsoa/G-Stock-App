const getAllUnites = async () => {
  const r = await fetch(`/api/unites`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  if (r.ok) return r.json();
  throw new Error("Error");
};

export { getAllUnites };
