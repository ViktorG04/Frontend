import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import InputTextContainer from "../formComponents/InputTextContainer";
import InputCheckBox from "../formComponents/InputCheckBox";
import SelectDynamic from "../formComponents/SelectDynamic";
import TextareaContainer from "../formComponents/TextareaContainer";
import GridButton from "../formComponents/button/GridButton";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import AccountDetails from "../accounts/AccountDetails";
import Modal from "../modal/Modal";
import Process from "./Process";
import dateFormat from "../../utils/dateFormat.js";
import useFormTransfer from "../../hooks/useFormTransfer";
import useRegisterTransfer from "../../hooks/useRegisterTransfer";
import useCheckButton from "../../hooks/useCheckButton";
import useGetAccounts from "../../hooks/useGetAccounts";
import useFilterAccounts from "../../hooks/useFilterAccounts";

import "./css/transfer.css";

const defaultValues = {
  date: dateFormat(),
  amount: null,
  accountOrigin: false,
  accountDestiny: false,
  description: "",
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

  const {
    amountRegister,
    dateRegister,
    accountOriginRegister,
    accountDestinyRegister,
    descriptionRegister,
  } = useRegisterTransfer({ register });

  const {
    accountDestiny,
    accountOrigin,
    accountFound,
    conversion,
    open,
    onHandleSubmit,
    onHandleClosed,
    onHandleClick,
  } = useFormTransfer(watch, reset);

  const { check, onHandleCheckPersonal, onHandleCheckAnother } =
    useCheckButton();

  const { idAccount, money } = accountFound;

  const { accounts } = useSelector((state) => state.accounts);

  const { personalAccounts, anotherAccounts } = check;

  const { externalAccounts } = useGetAccounts({ anotherAccounts });

  const { accountOut } = useFilterAccounts({
    personalAccounts,
    idAccount,
    accounts,
  });

  return (
    <div className="transfer-container">
      <div className="container-body">
        <h1>TRANSFER MONEY</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputTextContainer
            label="Date"
            type="date"
            register={dateRegister()}
            disable
          />
          <SelectDynamic
            label="Account Origin"
            name="accountOrigin"
            control={control}
            rules={accountOriginRegister()}
            accounts={accounts}
            error={errors.accountOrigin?.message}
          />

          <GridButton>
            <InputCheckBox
              label="Personal Accounts"
              checked={personalAccounts}
              disabled={anotherAccounts}
              onHandleClick={(event) => onHandleCheckPersonal(event)}
            />
            <InputCheckBox
              label="Externals Accounts"
              checked={anotherAccounts}
              disabled={personalAccounts}
              onHandleClick={(event) => onHandleCheckAnother(event)}
            />
          </GridButton>

          <SelectDynamic
            label="Account Beneficiary"
            name="accountDestiny"
            control={control}
            rules={accountDestinyRegister()}
            accounts={personalAccounts ? accountOut : externalAccounts}
            error={errors.accountDestiny?.message}
          />

          <InputTextContainer
            label="Amount to Transfer"
            type="text"
            register={amountRegister()}
            error={errors.amount?.message}
          />
          <TextareaContainer
            label="Description"
            register={descriptionRegister()}
            error={errors.description?.message}
          />

          <GridButtonForm
            onClick={() => onHandleClick()}
            nameButtonSubmit="Continue"
          />
        </form>
      </div>

      <Modal isOpen={open}>
        <Process
          cancelModal={() => onHandleClosed()}
          conversion={conversion}
          onHandleProcess={() => onHandleClick()}
        />
      </Modal>

      <Modal isOpen={accountOrigin}>
        <AccountDetails accountSelected={accountFound} reset={reset} />
      </Modal>
      <Modal isOpen={accountDestiny}>
        <AccountDetails accountSelected={accountFound} reset={reset} />
      </Modal>
    </div>
  );
};

export default FormTransfers;
