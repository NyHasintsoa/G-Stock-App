import IconSearch from "../icons/iconSearch.jsx";
import AdminResearch from "../research/AdminResearch.jsx";

function AdminHeader() {
  return (
    <>
      <div className="navbar navbar-glass rounded-lg sticky mb-3">
        <div className="navbar-start">
          <label
            htmlFor="modal-research-admin"
            className="hover:cursor-pointer md:border-gray-6 flex h-5 w-5 items-center justify-start md:h-auto md:w-64 md:flex-none md:rounded-lg md:border md:bg-backgroundSecondary md:py-2 md:pl-4 md:pr-3.5 md:text-sm"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="-ml-2 h-5 w-5 flex-none fill-content3"
            >
              <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"></path>
            </svg>
            <span className="sr-only text-content3 md:not-sr-only md:ml-2">
              Search docs
            </span>
            <kbd className="ml-auto hidden font-medium text-content3 md:block">
              <kbd className="font-sans">Ctrl </kbd>
              <kbd className="font-sans">K</kbd>
            </kbd>
          </label>
        </div>
      </div>
      <AdminResearch />
    </>
  );
}

export default AdminHeader;
