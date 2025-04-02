function CartModal() {
  return (
    <>
      <label className="btn btn-primary" htmlFor="modal-1">
        Open Modal
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">Modal title 1</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum voluptate ratione dicta. Maxime cupiditate, est commodi
            consectetur earum iure, optio, obcaecati in nulla saepe maiores
            nobis iste quasi alias!
          </span>
          <div className="flex gap-3">
            <button className="btn btn-error btn-block">Delete</button>
            <button className="btn btn-block">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
