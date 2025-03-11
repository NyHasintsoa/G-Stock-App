function TemplateDropdown() {
  return (
    <>
      <div className="hidden lg:block ms-2">
        <div className="hs-dropdown relative [--auto-close:inside] inline-flex">
          <button
            id="hs-dropdown-preview-sidebar"
            type="button"
            className="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs rounded-lg text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="">
              <svg
                className=" size-4 shrink-0"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>

            <span className="absolute -top-0.5 -end-0.5">
              <span className="relative flex">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 dark:bg-red-600 opacity-75"></span>
                <span className="relative inline-flex size-2 bg-red-500 rounded-full"></span>
                <span className="sr-only">Notification</span>
              </span>
            </span>
          </button>

          <div
            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full min-w-90 md:w-125 transition-[opacity,margin] duration opacity-0 z-30 overflow-hidden border border-gray-200 bg-white rounded-xl shadow-xl dark:bg-neutral-800 dark:border-neutral-700 hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-preview-sidebar"
            style={{
              transform: "translate3d(144px, 58px, 0px);"
            }}
            data-placement="bottom-start"
          >
            <div className="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b border-gray-200 dark:border-neutral-700">
              <nav
                className="flex gap-1"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="horizontal"
              >
                <button
                  type="button"
                  className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                  id="hs-pms-item-pro"
                  aria-selected="false"
                  data-hs-tab="#hs-pms-pro"
                  aria-controls="hs-pms-pro"
                  role="tab"
                >
                  Pro
                </button>
                <button
                  type="button"
                  className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
                  id="hs-pms-item-free"
                  aria-selected="true"
                  data-hs-tab="#hs-pms-free"
                  aria-controls="hs-pms-free"
                  role="tab"
                >
                  Free
                </button>
              </nav>

              <div className="mb-2 flex items-center gap-x-0.5">
                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:hidden flex shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  data-hs-theme-click-value="dark"
                >
                  <svg
                    className="shrink-0 size-3.5"
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
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                  Switch to Dark
                </button>
                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:flex hidden shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  data-hs-theme-click-value="light"
                >
                  <svg
                    className="shrink-0 size-3.5"
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
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  Switch to Light
                </button>
              </div>
            </div>

            <div
              id="hs-pms-pro"
              className="hidden"
              role="tabpanel"
              aria-labelledby="hs-pms-item-pro"
            >
              <div className="p-3 flex flex-wrap justify-between items-center gap-3">
                <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Templates (14)
                </span>

                <div className="ms-auto">
                  <a
                    className="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                    href="../../pro/pricing.html"
                  >
                    Purchase
                    <svg
                      className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="px-3 max-h-64 sm:max-h-100 overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/dashboard/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img1.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img1.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Dashboard
                    </p>

                    <div className="absolute -top-px end-[3px]">
                      <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                        +2 New
                      </span>
                    </div>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/shop-marketplace/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img29.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img29.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Shop Marketplace
                    </p>

                    <div className="absolute -top-px end-[3px]">
                      <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                        New
                      </span>
                    </div>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/startup/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img32.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img32.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Startup
                    </p>

                    <div className="absolute -top-px end-[3px]">
                      <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-500">
                        New
                      </span>
                    </div>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/shop/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img21.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img21.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Shop
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/chat/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img16.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img16.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Chat
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/payment/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img8.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img8.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Payment
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/ecommerce/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img4.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img4.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      E-Commerce
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/calendars/day.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img14.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img14.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Calendars
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/workspace/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img18.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img18.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Workspace
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/inbox/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img26.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img26.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Inbox
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/analytics/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img9.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img9.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Analytics
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/project/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img10.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img10.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Project
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/saas/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img11.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img11.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      SaaS
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../pro/files/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews/img12.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/demo-previews-dark/img12.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Files
                    </p>
                  </a>
                </div>
              </div>

              <div className="p-3 flex flex-wrap justify-center items-center gap-0.5">
                <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="../../pro/index.html"
                  >
                    Main page
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="../../pro/examples.html"
                  >
                    Examples
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="../../pro/templates.html"
                  >
                    Templates (14)
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              id="hs-pms-free"
              className=""
              role="tabpanel"
              aria-labelledby="hs-pms-item-free"
            >
              <div className="p-3 flex flex-wrap justify-between items-center gap-3">
                <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Templates (5)
                </span>

                <div className="ms-auto">
                  <a
                    className="group py-2 px-2.5 rounded-md flex items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                    href="../../templates.html"
                  >
                    Free download
                    <svg
                      className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="px-3 max-h-64 sm:max-h-100 overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../templates/agency/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews/img1.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews-dark/img1.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Agency
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../templates/personal/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews/img3.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews-dark/img3.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Personal
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 bg-gray-100 dark:bg-neutral-700 transition"
                    href="../../templates/admin/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews/img7.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews-dark/img7.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Admin
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../templates/creative-agency/index.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews/img2.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews-dark/img2.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      Creative Agency
                    </p>
                  </a>

                  <a
                    className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                    href="../../templates/ai-prompt/ai-with-sidebar.html"
                  >
                    <img
                      className="dark:hidden w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews/img4.webp"
                      alt="Main Page"
                    />
                    <img
                      className="hidden dark:block w-28 rounded-lg shadow-xs"
                      src="../../assets/img/template-previews-dark/img4.webp"
                      alt="Main Page"
                    />

                    <p className="text-sm text-gray-800 dark:text-neutral-400">
                      AI Prompt
                    </p>
                  </a>
                </div>
              </div>

              <div className="p-3 flex flex-wrap justify-center items-center gap-0.5">
                <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="../../index.html"
                  >
                    Main page
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="../../examples.html"
                  >
                    Examples (200+
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="relative ps-2 ms-1 first:ps-0 first:ms-0 first:before:hidden before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                  <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="../../templates.html"
                  >
                    Templates (5)
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplateDropdown;
