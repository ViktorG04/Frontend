import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAccountsByeIdUser } from '../redux';
import toast from 'react-hot-toast';

const useListAccount = () => {

  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(0);

  const { loading, errors, accounts } = useSelector((state) => state.accounts);
  const {
    user: { idUser },
    token,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!accounts.length) {
      dispatch(getAccountsByeIdUser({ idUser, token }));
    }
  }, [accounts, dispatch, idUser, token]);

  useEffect(() => {
    if (accounts.length) {
      const allAvailable = accounts.reduce((acc, account) => {
        return acc + account.available;
      }, 0);
      setBalance(allAvailable);
    }
  }, [accounts]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return { open, loading, balance, accounts, openModal, closeModal }
}

export default useListAccount;
