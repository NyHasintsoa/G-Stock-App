import { FaTrashAlt } from "react-icons/fa";
import { useCartStore } from "../../store/store.js";
import productImg from "../../assets/product.jpg";

function CartProductItems() {
  const { carts, deleteProduct } = useCartStore();

  return (
    <div className="max-h-[30rem] overflow-y-auto overflow-x-hidden">
      {carts.length == 0 ? (
        <h1>Pas De produit</h1>
      ) : (
        Array.from(carts, (cart, index) => (
          <div
            key={index}
            className="my-3 px-2 py-2 border-[1px] border-gray-700 rounded flex justify-between items-center"
          >
            <img src={productImg} alt="product" className="max-w-10 max-h-10" />
            <span className="text-sm text-gray-500">{cart.name}</span>
            <span className="text-gray-500 text-sm">x {cart.qte}</span>
            <button
              type="button"
              className="hover:text-red-700 me-2"
              onClick={() => deleteProduct(index)}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartProductItems;
