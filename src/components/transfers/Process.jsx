import React from "react";
import GridButton from "../formComponents/button/GridButton";
import Button from "../formComponents/button/Button";
import Paragraph from "../paragraph/Paragraph";
import useProcessTransfer from "../../hooks/useProcessTransfer";

const Process = ({ cancelModal, conversion, onHandleProcess }) => {
  const {
    numberAccountOrigin,
    numberAccountDestiny,
    amount,
    transferTo,
    currency,
    exchange,
    onHandleSubmit,
  } = useProcessTransfer(conversion, onHandleProcess);

  return (
    <div>
      <Paragraph description="Account Select" text={numberAccountOrigin} />
      <Paragraph
        description="Account Beneficiary"
        text={numberAccountDestiny}
      />
      <Paragraph description="Value Transfer" text={amount} />
      <Paragraph description="Transfer to" text={transferTo} />
      <Paragraph description="Value Currency" text={currency} />
      <Paragraph description="Value Exchange" text={exchange} />
      <GridButton>
        <Button type="reset" name="Cancel" onClick={() => cancelModal()} />
        <Button type="submit" name="Confirm" onClick={() => onHandleSubmit()} />
      </GridButton>
    </div>
  );
};

export default Process;
