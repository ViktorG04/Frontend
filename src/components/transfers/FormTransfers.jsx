import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputTextContainer from "../formComponents/InputTextContainer";
import {
  dateRegister,
  amountRegister,
  accountOriginRegister,
  accountDestinyRegister,
} from "./transferRegister";
import { useForm } from "react-hook-form";
import SelectDynamic from "../formComponents/SelectDynamic";

import "./css/transfer.css";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import dateFormat from "../../utils/dateFormat";
import AccountDetails from "../accounts/AccountDetails";
import Modal from "../modal/Modal";
import Process from "./Process";
import { getExchanges } from "../../services/exchange";
import { findAccount } from "./findAccount";

const defaultValues = {
  date: dateFormat(),
  amount: null,
  accountOrigin: false,
  accountDestiny: { value: "", label: "" },
};

const FormTransfers = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const { accounts } = useSelector((state) => state.accounts);
  const { token } = useSelector((state) => state.auth);

  const accounts2 = [...accounts];

  const [open, setOpen] = useState(false);
  const [conversion, setConversion] = useState({});
  const [accountSelected, setAccountSelected] = useState({});

  const navigate = useNavigate();

  const accountOrigin = watch("accountOrigin", false);

  useEffect(() => {
    if (accountOrigin) {
      const data = findAccount(accounts, accountOrigin);
      setAccountSelected(data);
    }
  }, [accountOrigin, accounts]);

  const onHandleSubmit = async (data) => {
    let { accountOrigin, accountDestiny, amount } = data;

    let { available } = accountSelected;

    available = parseFloat(available);
    amount = parseFloat(amount);

    if (amount > available) {
      return toast.error(
        `insufficient credit to transfer, available: ${available}`
      );
    }

    const idAccountOrigin = accountOrigin.value;
    const idAccountDestiny = accountDestiny.value;

    try {
      const response = await getExchanges({
        idAccountOrigin,
        idAccountDestiny,
        amount,
        token,
      });

      setConversion({ ...response, ...data });
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onHandleClick = () => {
    reset(defaultValues);
    setConversion({});
    navigate("/dashboard");
  };

  const onHandleClosed = () => {
    setOpen(false);
    setConversion({});
  };

  return (
    <div className="transfer-container">
      <div className="container-body">
        <h1>TRANSFER MONEY</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputTextContainer
            label="Date"
            type="date"
            register={dateRegister(register)}
            disable
          />
          {accountOrigin ? (
            <AccountDetails
              accountSelected={accountSelected}
              reset={reset}
              restart={{ accountOrigin: false }}
            />
          ) : (
            <SelectDynamic
              label="Account Origin"
              name="accountOrigin"
              control={control}
              rules={accountOriginRegister()}
              accounts={accounts}
              error={errors.accountOrigin?.message}
            />
          )}
          <button>Personal Accounts</button>
          <button>Externals Accounts</button>

          <SelectDynamic
            label="Account Beneficiary"
            name="accountDestiny"
            control={control}
            rules={accountDestinyRegister()}
            accounts={accounts2}
            error={errors.accountDestiny?.message}
          />
          <InputTextContainer
            label="Amount to Transfer"
            type="number"
            register={amountRegister(register)}
            error={errors.amount?.message}
          />

          <GridButtonForm
            onClick={() => onHandleClick()}
            nameButtonSubmit="Continue"
          />
        </form>
      </div>

      <Modal isOpen={open}>
        <Process
          onClose={() => onHandleClosed()}
          conversion={conversion}
          onClick={() => onHandleClick()}
        />
      </Modal>
    </div>
  );
};

export default FormTransfers;
