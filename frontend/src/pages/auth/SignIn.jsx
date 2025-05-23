import { Link } from "react-router";
import { useForm } from "react-hook-form";
import InputForm from "../../components/inputForm/InputForm.jsx";
import { wait } from "../../utils/api.js";
import SubmitBtn from "../../components/submitBtn/SubmitBtn.jsx";
import useAuth from "../../hooks/useAuth.js";
import { SigninForm as FormFields } from "../../forms/SigninForm.js";

function Signin() {
  const { login } = useAuth();
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = async (data) => {
    await wait();
    login(data);
  };

  const { errors, isSubmitting } = formState;

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white mx-auto flex w-full max-w-md flex-col rounded-xl border border-border p-2 sm:p-10"
        >
          <div className="flex w-full flex-col gap-2">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign in
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Don&apos;t have an account yet?&nbsp;
                <Link
                  className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                  to={"/auth/signup"}
                >
                  Sign up here
                </Link>
              </p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <button type="button" className="btn gap-2 bg-gray-5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span>Sign up with google</span>
              </button>
              <button type="button" className="btn gap-2 bg-gray-5">
                <svg
                  width="21"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  className="svg-inline--fa fa-github fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>

                <span>Sign up with github</span>
              </button>
            </div>
          </div>
          <div className="divider divider-horizontal my-6 text-xs text-content2 uppercase">
            or
          </div>

          <div className="form-group">
            <InputForm
              register={register}
              value={"admin@domain.com"}
              options={FormFields.email}
              errorField={errors.email}
            />
            <InputForm
              register={register}
              value={"Admin@123"}
              options={FormFields.password}
              errorField={errors.password}
            />
            <div className="form-field">
              <div className="form-control justify-between">
                <div className="flex gap-2">
                  <input
                    {...register("rememberMe")}
                    type="checkbox"
                    id="remember-checkbox"
                    className="checkbox"
                  />
                  <label htmlFor="remember-checkbox">Remember me</label>
                </div>
                <label className="form-label">
                  <Link
                    to={"/auth/recovery-account"}
                    className="link link-underline-hover link-primary text-sm"
                  >
                    Forgot your password?
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-field pt-3">
              <div className="form-control justify-between">
                <SubmitBtn
                  text={"Sign in"}
                  isSubmitting={isSubmitting}
                  className={"btn btn-primary w-full"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
