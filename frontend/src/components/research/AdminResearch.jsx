import IconSearch from "../icons/iconSearch.jsx";

function AdminResearch() {
  return (
    <>
      <input
        className="modal-state"
        id="modal-research-admin"
        type="checkbox"
      />

      <div className="modal items-start w-screen pt-28">
        <label className="modal-overlay" htmlFor="modal-research-admin"></label>
        <div className="modal-content flex flex-col gap-5 w-dvw max-w-3xl">
          <div className="">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                <IconSearch className="shrink-0 size-4 text-gray-400 dark:text-white/60" />
              </div>
              <input
                className="py-3 ps-10 pe-4 block w-full border-2 border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                type="text"
                aria-expanded="false"
                placeholder="Search docs"
              />
              <div className="absolute inset-y-0 end-0 flex items-center z-20 pe-3.5">
                <label
                  htmlFor="modal-research-admin"
                  className="py-1 px-3 rounded-lg cursor-pointer bg-gray-200 font-semibold text-sm"
                >
                  Cancel
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 h-28">
            No recent searches
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminResearch;
