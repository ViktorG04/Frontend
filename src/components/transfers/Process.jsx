import React from "react";
import GridButton from "../formComponents/button/GridButton";
import Button from "../formComponents/button/Button";
import Paragraph from "../paragraph/Paragraph";
import { transfers } from "../../services/services";
import { toast } from "react-hot-toast";
const Process = ({ onClose, conversion, onClick }) => {
  const {
    accountDestiny = { value: "", label: "" },
    accountOrigin = { value: "", label: "" },
    amount,
    currency,
    date,
    exchange,
    transferTo,
    token,
  } = conversion;

  const { value: idAccountDestiny, label: numberAccountDestiny } =
    accountDestiny;
  const { value: idAccountOrigin, label: numberAccountOrigin } = accountOrigin;

  const onHandleSubmit = async () => {
    let data = {
      date,
      idAccountOrigin,
      idAccountDestiny,
      amountOrigin: amount,
      amountDestiny: exchange,
    };
    try {
      const result = await transfers({ data, token });
      toast.success(result.message);
      onClick();
    } catch (error) {
      toast.error(error);
    }
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
        <Button type="reset" name="Cancel" onClick={() => onClose()} />
        <Button type="submit" name="Confirm" onClick={() => onHandleSubmit()} />
      </GridButton>
    </div>
  );
};

export default Process;
