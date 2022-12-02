import React from "react";
import { Toaster } from "react-hot-toast";
import InputTextContainer from "../formComponents/InputTextContainer";
import Button from "../formComponents/Button";
import { accountDate} from "../../config/configFields";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SelectDynamic from "../formComponents/SelectDynamic";

const accounts = [
  {
    idAccount: 1,
    bankName: "Promerica Bank",
    numberAccount: "123453122313312",
    dateExpiration: "2022-09-12",
    credit: 1200,
    divisa: "dollar",
    expensive: 300,
    income: 50.0,
    available: 950,
  },
  {
    idAccount: 2,
    bankName: "Agricola bank",
    numberAccount: "123213122313312",
    dateExpiration: "2022-09-12",
    credit: 1200,
    divisa: "euro",
    expensive: 300,
    income: 50.0,
    available: 950,
  },
  {
    idAccount: 3,
    bankName: "America bank",
    numberAccount: "1245613122313312",
    dateExpiration: "2022-09-12",
    credit: 1200,
    divisa: "dollar",
    expensive: 300,
    income: 50.0,
    available: 950,
  },
];

const AccountTransfer = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/accounts");
  };

  const onHandleSubmit = (data) => {
    console.log(data);
  };

  const propsSelect = {
    label: "Select Account",
    Controller,
    control,
    accounts,
    errors
  };
 

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Date"
          type="date"
          register={accountDate(register)}
          error={errors.dateExpiration?.message}
        />

        <SelectDynamic props={propsSelect} />
        
        <div>
          <Button type="reset" onClick={handleClick} name="Cancel" />
          <Button type="submit" name="Process" />
        </div>
      </form>
    </div>
  );
};

export default AccountTransfer;
