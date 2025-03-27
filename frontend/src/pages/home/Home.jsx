import Hero from "../../components/hero/Hero.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import ProductSkeleton from "../../components/productCard/productSkeleton.jsx";

function Home() {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center">
        <h1 className="text-lg uppercase mb-5">nos produits</h1>
      </div>
      <div className="my-4 mx-20 grid grid-cols-4 gap-4">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    </>
  );
}

export default Home;
