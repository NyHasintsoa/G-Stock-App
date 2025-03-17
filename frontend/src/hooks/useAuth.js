import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useAccountStore } from "../store/store.js";
import { getCurrentUser, loginRequest } from "../services/authService.js";
import { useNavigate } from "react-router";

export const AuthStatus = {
  Unknown: 0,
  Authenticated: 1,
  Guest: 2
};

const useAuth = () => {
  const TOKEN_COOKIE = import.meta.env.VITE_TOKEN_COOKIE;
  const { account, setAccount } = useAccountStore();
  const navigate = useNavigate();

  let status;
  switch (account) {
    case null:
      status = AuthStatus.Guest;
      break;
    case undefined:
      status = AuthStatus.Unknown;
      break;
    default:
      status = AuthStatus.Authenticated;
      break;
  }

  const authenticate = useCallback(async () => {
    if (status === AuthStatus.Guest || status === AuthStatus.Unknown) {
      try {
        const userInfo = await getCurrentUser();
        setAccount(userInfo);
      } catch (error) {
        toast.error(error.message);
        setAccount({});
      }
    }
  }, []);

  const loginUser = useCallback(async (data) => {
    try {
      const { token, userInfo } = await loginRequest(data);
      Cookies.set(TOKEN_COOKIE, token);
      setAccount(userInfo);
      navigate("/admin");
    } catch (error) {
      toast.error("Veuillez vérifier votre mot de passe ou votre adresse mail");
    }
  }, []);

  const logoutUser = useCallback(() => {
    Cookies.remove(TOKEN_COOKIE);
    setAccount(null);
    navigate("/");
  }, []);

  const registerUser = useCallback(async (data) => {
    try {
      // const response = await register
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (
      status === AuthStatus.Unknown ||
      (account == undefined && Cookies.get(TOKEN_COOKIE) != undefined)
    ) {
      authenticate();
    }
  }, []);

  return {
    account,
    status,
    authenticate,
    loginUser,
    logoutUser,
    registerUser
  };
};

export default useAuth;
