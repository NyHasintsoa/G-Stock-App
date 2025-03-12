function AddProduct() {
  return (
    <>
      {/* Card Section */}
      <div className="max-w-2xl px-4 sm:px-6 mx-auto">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
              Nouveau Produit
            </h2>
          </div>

          <form>
            {/* Section */}
            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
              <label
                htmlFor="af-payment-billing-contact"
                className="inline-block text-sm font-medium dark:text-white"
              >
                Billing contact
              </label>

              <div className="mt-2 space-y-3">
                <input
                  id="af-payment-billing-contact"
                  type="text"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-[1px] border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-[1px] border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Last Name"
                />
              </div>
            </div>
            {/* End Section */}

            {/* Section */}
            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
              <label
                htmlFor="af-payment-billing-address"
                className="inline-block text-sm font-medium dark:text-white"
              >
                Billing address
              </label>

              <div className="mt-2 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <select className="py-1.5 sm:py-2 px-3 pe-9 block w-full border-[1px] border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    <option selected>City</option>
                    <option>City 1</option>
                    <option>City 2</option>
                    <option>City 3</option>
                  </select>
                  <select className="py-1.5 sm:py-2 px-3 pe-9 block w-full border-[1px] border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    <option selected>State</option>
                    <option>State 1</option>
                    <option>State 2</option>
                    <option>State 3</option>
                  </select>
                </div>
              </div>
            </div>
            {/* End Section */}
          </form>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Save changes
            </button>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Section */}
    </>
  );
}

export default AddProduct;
