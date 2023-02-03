import React from "react";
import { useForm } from "react-hook-form";
import { SYMBOL_MONEY } from "../../config/config";
import SimpleInput from "../formComponents/SimpleInput";
import InputCheckBox from "../formComponents/InputCheckBox";
import SelectDynamic from "../formComponents/SelectDynamic";
import TextareaContainer from "../formComponents/TextareaContainer";
import GridButton from "../formComponents/button/GridButton";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import Modal from "../modal/Modal";
import Process from "./Process";
import dateFormat from "../../utils/dateFormat.js";
import useRegisterTransfer from "../../hooks/useRegisterTransfer";
import useCheckButton from "../../hooks/useCheckButton";
import useFormTransfer from "../../hooks/useFormTransfer";
import AccountDetails from "../accounts/AccountDetails";

import "./css/transfer.css";
import useReduxData from "../../hooks/useReduxData";

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
      <div className="container-body">
        <h1>TRANSFER MONEY</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <SimpleInput
            type="date"
            register={dateRegister()}
            error={errors.date?.message}
            disable={true}
          />

          <div className="container-selectAccount">
            <SelectDynamic
              label="Account Origin"
              name="accountOrigin"
              control={control}
              rules={accountOriginRegister()}
              accounts={accounts}
              error={errors.accountOrigin?.message}
            />

            <AccountDetails description="Bank Name" value={bankName} />
          </div>

          <GridButton>
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
          </GridButton>

          <div className="container-selectAccount">
            <SelectDynamic
              label="Account Beneficiary"
              name="accountDestiny"
              control={control}
              rules={accountDestinyRegister()}
              accounts={destinyAccounts}
              error={errors.accountDestiny?.message}
            />
            <AccountDetails description="Bank Name" value={bankDestiny} />
          </div>

          <div>
            <div>
              <AccountDetails
                description="Available"
                value={available ? `${SYMBOL_MONEY[money]} ${available}` : ""}
              />
              <div>
                <p>
                  Transfer from<strong>{change.from}</strong> to <strong>{change.to}</strong>
                </p>
                <button type="button" onClick={() => changeTransfer()}>
                  Change
                </button>
              </div>
              <SimpleInput
                label="Amount"
                type="text"
                register={amountRegister()}
                error={errors.amount?.message}
              />
            </div>
          </div>

          <TextareaContainer
            label="Description"
            register={descriptionRegister()}
            error={errors.description?.message}
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
