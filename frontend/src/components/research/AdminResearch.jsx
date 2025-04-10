function AdminResearch() {
  return (
    <>
      <input
        className="modal-state"
        id="modal-research-admin"
        type="checkbox"
      />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-research-admin"></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="modal-research-admin"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">Modal title 1</h2>
          <span>
            <input type="text" className="input" />
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

export default AdminResearch;
