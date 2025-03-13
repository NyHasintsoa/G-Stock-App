import { Link, useParams } from "react-router";
import productImg from "../../assets/product.jpg";

function UpdateProduct() {
  const { productId } = useParams();
  return (
    <>
      {/* Card Section */}
      <div className="max-w-2xl px-4 sm:px-6 mx-auto">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
          <div className="flex justify-center items-center">
            <div className="relative rounded-xl max-h-60 overflow-y-hidden">
              <img src={productImg} alt="Product Image" />
              <div className="absolute top-0 end-0 p-4">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1={12} x2={12} y1={3} y2={15} />
                  </svg>
                  Upload header
                </button>
              </div>
            </div>
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
            <Link
              className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              to={"/admin/products"}
            >
              Cancel
            </Link>
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

export default UpdateProduct;
