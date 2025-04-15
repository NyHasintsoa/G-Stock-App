import { useCallback, useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router";
import { wait } from "../utils/api";

/**
 * Hook to call the api and return the item to json
 * @param {Function} apiFetch Callback To call the APi
 * @param {String} paramId Id Parameter
 * @return {Object}
 */
const useFetchItem = (apiFetch, paramId) => {
  const [item, setItem] = useState({});
  const [loading, startTransition] = useTransition();
  const navigate = useNavigate();

  const fetchItem = useCallback(async () => {
    startTransition(async () => {
      try {
        await wait();
        const { data } = await apiFetch(paramId);
        setItem(data);
      } catch (error) {
        navigate("/error/not-found");
      }
    });
  }, []);

  useEffect(() => {
    fetchItem();
  }, []);

  return {
    item,
    loading
  };
};

export default useFetchItem;
