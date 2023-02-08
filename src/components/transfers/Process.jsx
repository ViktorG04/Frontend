import React from "react";
import Button from "../formComponents/button/Button";
import Paragraph from "../paragraph/Paragraph";
import useProcessTransfer from "../../hooks/useProcessTransfer";
import { SYMBOL_MONEY } from "../../config/config";
import { formatAmount } from "../../utils/formatAmount";
import "./css/process.css";

const values = { value: "", label: "" };

const Process = ({ cancelModal, conversion, onHandleProcess }) => {
  const {
    accountDestiny = values,
    accountOrigin = values,
    amountOrigin,
    to,
    from,
    currency,
    amountDestiny,
    ...send
  } = conversion;

  const { value: idAccountDestiny, label: numberAccountDestiny } = accountDestiny;
  const { value: idAccountOrigin, label: numberAccountOrigin } = accountOrigin;

  const data = { ...send, idAccountDestiny, idAccountOrigin, amountOrigin, amountDestiny };
  const { onHandleSubmit } = useProcessTransfer(data, onHandleProcess);
  return (
    <div className="container-process">
      <Paragraph description="Account Select" text={numberAccountOrigin} />
      <Paragraph description="Account Destiny" text={numberAccountDestiny} />
      <Paragraph description="Transfer" text={from} />
      <Paragraph description="Convert to" text={to} />
      <Paragraph description="Exchange" text={currency} />
      <Paragraph
        description="Money to transfer"
        text={formatAmount(SYMBOL_MONEY[from], amountOrigin)}
      />
      <Paragraph
        description="Money to receive"
        text={formatAmount(SYMBOL_MONEY[to], amountDestiny)}
      />
      <div className="container-button">
        <Button type="reset" name="Cancel" onClick={() => cancelModal()} />
        <Button type="submit" name="Confirm" onClick={() => onHandleSubmit()} />
      </div>
    </div>
  );
};

export default Process;
