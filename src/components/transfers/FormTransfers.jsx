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
import SelectPersonalAccounts from "./SelectPersonalAccounts";
import SelectExternalAccounts from "./SelectExternalAccounts";
import Modal from "../modal/Modal";
import Process from "./Process";
import dateFormat from "../../utils/dateFormat.js";
import useFormTransfer from "../../hooks/useFormTransfer";
import useRegisterTransfer from "../../hooks/useRegisterTransfer";
import useCheckButton from "../../hooks/useCheckButton";
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
    accountOrigin,
    accountSelected,
    conversion,
    open,
    onHandleSubmit,
    onHandleClosed,
    onHandleClick,
  } = useFormTransfer(watch, reset, defaultValues);

  const { check, onHandleCheckPersonal, onHandleCheckAnother } =
    useCheckButton();

  const { personalAccounts, anotherAccounts } = check;

  const { accounts } = useSelector((state) => state.accounts);

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
          {accountOrigin ? (
            <AccountDetails
              accountSelected={accountSelected}
              reset={reset}
              restart={defaultValues}
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

          {personalAccounts ? (
            <SelectPersonalAccounts
              control={control}
              rules={accountDestinyRegister()}
              errors={errors.accountDestiny?.message}
              accountSelected={accountSelected.idAccount}
            />
          ) : (
            <SelectExternalAccounts
              control={control}
              rules={accountDestinyRegister()}
              errors={errors.accountDestiny?.message}
            />
          )}

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
    </div>
  );
};

export default FormTransfers;
