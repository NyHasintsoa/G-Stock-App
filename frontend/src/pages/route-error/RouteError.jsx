import { Link, useRouteError } from "react-router";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu.jsx";
import FooterMenu from "../../components/FooterMenu/FooterMenu.jsx";

function RouteError() {
  const error = useRouteError();

  return (
    <>
      <HeaderMenu />
      <div className="max-w-3xl flex flex-col mx-auto size-full my-5">
        {/* ========== MAIN CONTENT ========== */}
        <main>
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
              {error.status}
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Oops, something went wrong.
            </p>
            <p className="text-gray-600 dark:text-neutral-400">
              {error.statusText}
            </p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <Link
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                to={"/"}
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Home Page
              </Link>
            </div>
          </div>
        </main>
        {/* ========== END MAIN CONTENT ========== */}

        {/* ========== FOOTER ========== */}
        <footer className="mt-auto text-center py-5">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              © All Rights Reserved. 2022.
            </p>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </div>
      <FooterMenu />
    </>
  );
}

export default RouteError;
