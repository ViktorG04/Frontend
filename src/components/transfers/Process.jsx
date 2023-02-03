import React from "react";
import GridButton from "../formComponents/button/GridButton";
import Button from "../formComponents/button/Button";
import Paragraph from "../paragraph/Paragraph";
import useProcessTransfer from "../../hooks/useProcessTransfer";
import { SYMBOL_MONEY } from "../../config/config";

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
    <div>
      <Paragraph description="Account Select" text={numberAccountOrigin} />
      <Paragraph description="Account Beneficiary" text={numberAccountDestiny} />
      <Paragraph description="Transfer From" text={from + " To " + to} />
      <Paragraph description="Exchange" text={currency} />
      <Paragraph description="Money to transfer" text={SYMBOL_MONEY[from] + " " + amountOrigin} />
      <Paragraph description="Money to receive" text={SYMBOL_MONEY[to] + " " + amountDestiny} />
      <GridButton>
        <Button type="reset" name="Cancel" onClick={() => cancelModal()} />
        <Button type="submit" name="Confirm" onClick={() => onHandleSubmit()} />
      </GridButton>
    </div>
  );
};

export default Process;
