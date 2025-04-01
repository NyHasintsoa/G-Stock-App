import { useNavigate } from "react-router";
import authService from "../services/AuthService.js";
import { useAccountStore } from "../store/store.js";
import { useCallback } from "react";

export const AuthStatus = {
  Unknown: 0,
  Authenticated: 1,
  Guest: 2
};

const useAuth = () => {
  const { account, setAccount } = useAccountStore();
  const navigate = useNavigate();

  let status = AuthStatus.Unknown;
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

  const authenticate = useCallback(() => {
    authService
      .getCurrentUser()
      .then(setAccount)
      .catch(() => {
        setAccount(null);
      });
  }, []);

  const login = useCallback((data) => {
    authService
      .signin(data)
      .then((response) => {
        const { userInfo } = response;
        setAccount(userInfo);
      })
      .then(() => {
        navigate("/user/profile");
      })
      .catch(() => {
        setAccount(null);
      });
  }, []);

  const logout = useCallback(() => {
    authService.signOut().then(() => {
      setAccount(null);
      navigate("/");
    });
  });

  return {
    account,
    status,
    authenticate,
    login,
    logout
  };
};

export default useAuth;
