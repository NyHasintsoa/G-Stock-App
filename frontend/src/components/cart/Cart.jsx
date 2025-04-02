import { useNavigate } from "react-router";
import { useCartStore } from "../../store/store.js";
import CartProductItems from "./CartProductItems.jsx";
import { FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth.js";
import toast from "react-hot-toast";
import orderService from "../../services/OrderService.js";
import { useTransition } from "react";
import { wait } from "../../utils/api.js";

function Cart() {
  const { account } = useAuth();
  const { carts, removeCart } = useCartStore();
  const navigate = useNavigate();
  const [isSubmitting, startTransition] = useTransition();

  const handleSubmitCommand = () => {
    if (carts.length == 0) {
      toast.error("Veuillez ajouter des produits avant de valider", {
        position: "bottom-left"
      });
      return;
    }
    if (!account) {
      toast.error("Veuillez vous connecter avant de valider votre commande");
      navigate("/auth/signin");
      return;
    }
    startTransition(async () => {
      await wait();
      orderService.addNew({ carts }).then(() => {
        removeCart();
        toast.success("Commande valider avec succès", {
          position: "bottom-left"
        });
      });
    });
  };

  return (
    <>
      <input type="checkbox" id="user-cart-list" className="drawer-toggle" />

      <label className="overlay" htmlFor="user-cart-list"></label>
      <div className="drawer drawer-right">
        <div className="drawer-content pt-10 flex flex-col h-full">
          <label
            htmlFor="user-cart-list"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:text-red-600"
          >
            <FaTimes />
          </label>
          <div>
            <h2 className="text-xl font-medium">Create your account</h2>
            <input className="input py-1.5 my-3" placeholder="Type here..." />
            <CartProductItems />
          </div>
          <div className="h-full flex flex-row justify-end items-end gap-2">
            <button
              type="button"
              onClick={() => removeCart()}
              className="btn btn-error"
            >
              Annuler Achat
            </button>
            <button
              onClick={handleSubmitCommand}
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center w-full">
                  <svg
                    className="spinner-ring size-4 [--spinner-color:var(--slate-5)]"
                    viewBox="25 25 50 50"
                    strokeWidth="5"
                  >
                    <circle cx="50" cy="50" r="20" />
                  </svg>
                </div>
              ) : (
                "Commander"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
