import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoAccountById } from "../services/accounts";
import { toast } from "react-hot-toast";
import { updateStateAccount } from "../redux/index";
import useFindAccount from "./useFindAccount";

const initialState = {
  allExpensive: 0.0,
  allIncomes: 0.0,
  debits: [],
  credits: [],
};

const useAccount = () => {
  const [accountInfo, setAccountInfo] = useState(initialState);
  const { token } = useSelector((state) => state.auth);

  const [openState, setOpenState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idAccount } = useParams();

  const { accountFound, errors, notification } = useFindAccount({ idAccount });

  const fetchData = useCallback(async () => {
    const data = await getInfoAccountById(idAccount, token);
    setAccountInfo({ ...data });
  }, [idAccount, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  useEffect(() => {
    if (notification) {
      navigate("/dashboard");
    }
  }, [notification, navigate]);

  const onHandleDeleteAccount = async () => {
    dispatch(updateStateAccount({ token, idAccount }));
  };

  return { accountInfo, accountFound, openState, setOpenState, onHandleDeleteAccount };
}

export default useAccount
