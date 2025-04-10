import AdminResearch from "../research/AdminResearch.jsx";

function AdminHeader() {
  return (
    <>
      <div className="navbar navbar-glass rounded-lg sticky mb-3">
        <div className="navbar-end">
          <label
            className="flex gap-x-1 items-center border-[1px] rounded-lg border-gray-400 py-1 px-3 hover:cursor-pointer"
            htmlFor="modal-research-admin"
          >
            <span>Rechercher</span>
            <div className="kbd kbd-md">Ctrl</div>
            <div className="kbd kbd-md">K</div>
          </label>
        </div>
      </div>
      <AdminResearch />
    </>
  );
}

export default AdminHeader;
