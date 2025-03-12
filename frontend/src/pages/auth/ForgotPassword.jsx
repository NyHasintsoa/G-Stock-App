import { Link } from "react-router";

function ForgotPassword() {
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center py-16 dark:bg-neutral-800">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Forgot password?
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Remember your password?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                    to={"/auth/signin"}
                  >
                    Sign in here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                {/* Form */}
                <form>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          className="py-2.5 sm:py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          aria-describedby="email-error"
                        />
                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                          <svg
                            className="size-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    {/* End Form Group */}

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Reset password
                    </button>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
