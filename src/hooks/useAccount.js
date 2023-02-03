import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoAccountById } from "../services/accounts";
import { updateStateAccount } from "../redux/index";
import useFindAccount from "./useFindAccount";
import useReduxData from "./useReduxData";

const initialState = {
  allExpensive: 0.0,
  allIncomes: 0.0,
  debits: [],
  credits: [],
};

const useAccount = () => {
  const [accountInfo, setAccountInfo] = useState(initialState);
  const [openState, setOpenState] = useState(false);

  const { idAccount } = useParams();

  const { token, accounts, notification } = useReduxData();
  const { accountFound } = useFindAccount({ idAccount, objectFind: accounts });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const data = await getInfoAccountById(idAccount, token);
    setAccountInfo({ ...data });
  }, [idAccount, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (notification) {
      navigate("/dashboard");
    }
  }, [notification, navigate]);

  const onHandleDeleteAccount = async () => {
    dispatch(updateStateAccount({ token, idAccount }));
  };

  return { accountInfo, accountFound, openState, setOpenState, onHandleDeleteAccount };
};

export default useAccount;
