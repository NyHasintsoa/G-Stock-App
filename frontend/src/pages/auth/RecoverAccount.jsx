import { Link } from "react-router";
import InputForm from "../../components/inputForm/InputForm.jsx";
import { useForm } from "react-hook-form";
import { wait } from "../../utils/api.js";
import SubmitBtn from "../../components/submitBtn/SubmitBtn.jsx";
import { useState } from "react";
import authService from "../../services/AuthService.js";
import { RecoveryAccount as FormFields } from "../../forms/RecoveryAccount.js";

function RecoverAccount() {
  const { register, handleSubmit, formState } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    await wait();
    authService.sendPasswordRecoveryMail(data).then(() => {
      setSuccess(true);
    });
  };

  const { errors, isSubmitting } = formState;

  return (
    <div className="min-h-screen flex justify-center items-center mx-5 sm:mx-0">
      <div className="w-full sm:w-96 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Remember your password?&nbsp;
              <Link
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                to={"/auth/signin"}
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <InputForm
                  register={register}
                  errorField={errors.email}
                  options={FormFields.email}
                  value={"admin@domain.com"}
                />
                {success ? (
                  <p className="text-green-700">Email sended successfully</p>
                ) : (
                  ""
                )}
                <SubmitBtn
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  isSubmitting={isSubmitting}
                  text="Reset password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecoverAccount;
