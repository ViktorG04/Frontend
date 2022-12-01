import React from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import SelectTextContainer from "../formComponents/SelectTextContainer";
import InputTextContainer from "../formComponents/InputTextContainer";
import {
  accountCredit,
  accountDate,
  accountName,
  accountNumber,
} from "../../config/configFields";
import Button from "../formComponents/Button";
import withControlledForm from "../../hooks/withControlledForm";

const typeMoney = [
  {
    id: 1,
    type: "dollar",
  },
  {
    id: 2,
    type: "euro",
  },
  {
    id: 3,
    type: "quetzal",
  },
];

const AddAccount = ({ hookFormProps }) => {
  const { register, handleSubmit, errors, handleClick, navigate } = hookFormProps;

  const { id } = useParams();

  const onHandleSubmit = (data) => {
    data.idUser = id;
    console.log(data);
    navigate("/accounts");
    toast.success("created Account");
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <h2>Add a bank account</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Name of the Bank"
          type="text"
          register={accountName(register)}
          error={errors.bankName?.message}
        />
         <SelectTextContainer
          label="kind of Money"
          list={typeMoney}
          register={register("idTypeMoney")}
        /> 
        <InputTextContainer
          label="Account number"
          type="text"
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
          type="text"
          register={accountCredit(register)}
          error={errors.credit?.message}
        />
        <div>
          <Button type="reset" onClick={handleClick} name="Cancel" />
          <Button type="submit" name="Create" />
        </div>
      </form>
    </div>
  );
};

export const AddAccountFormWithControlled = withControlledForm(
  AddAccount,
  "/accounts"
);
