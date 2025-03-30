import CartProductItems from "./CartProductItems.jsx";

function Cart() {
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
            ✕
          </label>
          <div>
            <h2 className="text-xl font-medium">Create your account</h2>
            <input className="input py-1.5 my-3" placeholder="Type here..." />
            <CartProductItems />
          </div>
          <div className="h-full flex flex-row justify-end items-end gap-2">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
