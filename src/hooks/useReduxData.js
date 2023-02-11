import { useSelector } from "react-redux";
const useReduxData = () => {
  const {
    token,
    user: { idUser },
  } = useSelector((state) => state.auth);
  const { loading, accounts, errors, notification, request } = useSelector(
    (state) => state.accounts
  );

  return { token, accounts, idUser, notification, loading, request, errors };
};

export default useReduxData;
