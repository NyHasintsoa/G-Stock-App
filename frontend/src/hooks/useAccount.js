import useAuth from "./useAuth.js";

const useAccount = () => {
  const { account } = useAuth();

  if (!account) throw new Error("User is not authenticated");

  return {
    account
  };
};

export default useAccount;
