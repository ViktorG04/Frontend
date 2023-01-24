import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import InputTextContainer from "../formComponents/InputTextContainer";
import SelectDynamic from "../formComponents/SelectDynamic";
import GridButton from "../formComponents/button/GridButton";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import AccountDetails from "../accounts/AccountDetails";
import SelectPersonalAccounts from "./SelectPersonalAccounts";
import SelectExternalAccounts from "./SelectExternalAccounts";
import Modal from "../modal/Modal";
import Process from "./Process";
import dateFormat from "../../utils/dateFormat.js";
import useFormTransfer from "../../hooks/useFormTransfer";
import {
  dateRegister,
  amountRegister,
  accountOriginRegister,
  accountDestinyRegister,
} from "./transferRegister";
import "./css/transfer.css";

const defaultValues = {
  date: dateFormat(),
  amount: null,
  accountOrigin: false,
  accountDestiny: false,
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
    accountOrigin,
    accountSelected,
    check,
    conversion,
    open,
    onHandleClickCheckPersonal,
    onHandleClickCheckAnotherAccounts,
    onHandleSubmit,
    onHandleClosed,
    onHandleClick,
  } = useFormTransfer(watch, reset, defaultValues);

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
            register={dateRegister(register)}
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
            <div>
              <label>Personal Accounts</label>
              <input
                type="checkbox"
                checked={personalAccounts}
                disabled={anotherAccounts}
                onChange={(event) => onHandleClickCheckPersonal(event)}
              />
            </div>
            <div>
              <label>Externals Accounts</label>
              <input
                type="checkbox"
                checked={anotherAccounts}
                disabled={personalAccounts}
                onChange={(event) => onHandleClickCheckAnotherAccounts(event)}
              />
            </div>
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
