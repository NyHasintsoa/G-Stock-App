import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";

function CategoryItems({ categories }) {
  return (
    <>
      {Array.from(categories, (category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </>
  );
}

export default CategoryItems;
