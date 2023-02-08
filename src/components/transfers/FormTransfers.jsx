import React from "react";
import { useForm } from "react-hook-form";
import { SYMBOL_MONEY } from "../../config/config";
import SimpleInput from "../formComponents/SimpleInput";
import InputCheckBox from "../formComponents/InputCheckBox";
import TextareaContainer from "../formComponents/TextareaContainer";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import Modal from "../modal/Modal";
import Process from "./Process";
import dateFormat from "../../utils/dateFormat.js";
import useRegisterTransfer from "../../hooks/useRegisterTransfer";
import useCheckButton from "../../hooks/useCheckButton";
import useFormTransfer from "../../hooks/useFormTransfer";
import AccountDetails from "../accounts/AccountDetails";
import useReduxData from "../../hooks/useReduxData";
import SelectAccount from "./SelectAccount";
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
    dateRegister,
    amountRegister,
    accountOriginRegister,
    accountDestinyRegister,
    descriptionRegister,
  } = useRegisterTransfer({ register });

  const { check, onHandleCheckPersonal, onHandleCheckAnother } = useCheckButton({ reset });
  const { personalAccounts, anotherAccounts } = check;

  const {
    accountOriginSelected,
    destinyAccounts,
    bankDestiny,
    open,
    conversion,
    change,
    onHandleSubmit,
    onHandleClick,
    onHandleClosed,
    changeTransfer,
  } = useFormTransfer({ reset, watch, check });

  const { bankName, available, money } = accountOriginSelected;

  const { accounts } = useReduxData();

  return (
    <div className="transfer-container">
      <div className="transfer-container-body">
        <h1>MONEY TRANSFER</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <SimpleInput
            type="date"
            register={dateRegister()}
            error={errors.date?.message}
            disable={true}
            className="container-date"
          />
          <SelectAccount
            label="Account Origin"
            name="accountOrigin"
            control={control}
            register={accountOriginRegister()}
            accounts={accounts}
            error={errors.accountOrigin?.message}
            bankName={bankName}
          />
          <div className="checkbox">
            <InputCheckBox
              label="Personal Accounts"
              checked={personalAccounts}
              onHandleClick={(event) => onHandleCheckPersonal(event)}
            />
            <InputCheckBox
              label="Externals Accounts"
              checked={anotherAccounts}
              onHandleClick={(event) => onHandleCheckAnother(event)}
            />
          </div>
          <SelectAccount
            label="Account Beneficiary"
            name="accountDestiny"
            control={control}
            register={accountDestinyRegister()}
            accounts={destinyAccounts}
            error={errors.accountOrigin?.message}
            bankName={bankDestiny}
          />

          <div className="money">
            {change.to ? (
              <div className="amount">
                <button type="button" onClick={() => changeTransfer()}>
                  Change
                </button>
                <p>
                  <strong>{change.from}</strong>to <strong>{change.to}</strong>
                </p>
              </div>
            ) : (
              <p></p>
            )}

            <div>
              <AccountDetails
                description="Available"
                value={available ? `${SYMBOL_MONEY[money]} ${available}` : "0.00"}
                margin="86px"
              />
              <SimpleInput
                label="Amount"
                type="text"
                register={amountRegister()}
                error={errors.amount?.message}
                placeholder={change.from ? `${SYMBOL_MONEY[change.from]} 0.00` : "0.00"}
                className="container-amount"
              />
            </div>
          </div>

          <TextareaContainer
            label="Description"
            register={descriptionRegister()}
            error={errors.description?.message}
            className="container-textarea-transfer"
          />

          <GridButtonForm onClick={() => onHandleClick()} nameButtonSubmit="Continue" />
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
