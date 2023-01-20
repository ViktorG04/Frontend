import React from "react";
import GridButton from "../formComponents/button/GridButton";
import Button from "../formComponents/button/Button";
import Paragraph from "../paragraph/Paragraph";
const Process = ({ onClose, conversion, onClick }) => {
  const {
    accountDestiny = { value: "", label: "" },
    accountOrigin = { value: "", label: "" },
    amount,
    currency,
    date,
    exchange,
    transferTo,
  } = conversion;

  const { value: idAccountDestiny, label: numberAccountDestiny } =
    accountDestiny;
  const { value: idAccountOrigin, label: numberAccountOrigin } = accountOrigin;

  const onHandleSubmit = async () => {
    onClick();
  };

  const onHandleClick = () => {
    onClose();
  };

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
        <Button type="reset" name="Cancel" onClick={() => onHandleClick()} />
        <Button type="submit" name="Confirm" onClick={() => onHandleSubmit()} />
      </GridButton>
    </div>
  );
};

export default Process;
