import { useCallback, useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router";
import { wait } from "../utils/api";

const useFetch = (apiFetch) => {
  const [item, setItem] = useState({});
  const [loading, startTransition] = useTransition();
  const navigate = useNavigate();

  const fetchItem = useCallback(async () => {
    startTransition(async () => {
      try {
        await wait();
        const { data } = await apiFetch();
        setItem(data);
      } catch (error) {
        console.error(
          "\n###########################################\n",
          error,
          "\n###########################################\n"
        );
      }
    });
  }, []);

  useEffect(() => {
    fetchItem();
  }, []);

  return [item, loading];
};

export default useFetch;
