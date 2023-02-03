import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const useReduxData = () => {
  const {
    token,
    user: { idUser },
  } = useSelector((state) => state.auth);
  const { loading, accounts, errors, notification, request } = useSelector(
    (state) => state.accounts
  );

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  return { token, accounts, idUser, notification, loading, request };
};

export default useReduxData;
