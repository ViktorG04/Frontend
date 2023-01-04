import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import InputTextContainer from "../formComponents/InputTextContainer";
import {
  accountCredit,
  accountDate,
  accountName,
  accountNumber,
} from "./functionality/addAccountRegister";
import Button from "../formComponents/button/Button";
import withControlledForm from "../../hoc/withControlledForm";
import Loading from "../alerts/Loading";

import { createAccount } from "../../features/account/actions";
import { getTyMoney } from "../../services/money";
const AddAccount = ({ formProps }) => {
  const { register, handleSubmit, errors, navigate } = formProps;
  const [typeMoney, setTypeMoney] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await getTyMoney();
    setTypeMoney(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const dispatch = useDispatch();

  const onHandleSubmit = (data) => {
    data.idUser = 1;
    console.log(data);
    dispatch(createAccount(data));

    toast.success("created Account");
    navigate("/dashboard/accounts");
  };

  return (
    <div>
      {/*    <Loading status={setAccount?.loading} /> */}
      <h2>Add Account</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Name of the Bank"
          type="text"
          register={accountName(register)}
          error={errors.bankName?.message}
        />
        <SelectTextContainer
          label="kind of Money"
          listSelect={typeMoney}
          register={register("idTypeMoney")}
        />
        <InputTextContainer
          label="Account number"
          type="number"
          register={accountNumber(register)}
          error={errors.numberAccount?.message}
        />
        <InputTextContainer
          label="Expiration date"
          type="date"
          register={accountDate(register)}
          error={errors.dateExpiration?.message}
        />
        <InputTextContainer
          label="Account credit"
          type="number"
          register={accountCredit(register)}
          error={errors.credit?.message}
        />
        <div>
          <Button type="submit" name="Create" />
        </div>
      </form>
    </div>
  );
};

export const AddAccountFormWithControlled = withControlledForm(AddAccount, "/accounts");
