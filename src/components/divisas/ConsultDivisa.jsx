import React from "react";
import { useForm } from "react-hook-form";
import { SYMBOL_MONEY } from "../../config/config";
import useRegisterTransfer from "../../hooks/useRegisterTransfer";
import SimpleInput from "../formComponents/SimpleInput";
import useDivisa from "../../hooks/useDivisa";
import GridButton from "../formComponents/button/GridButton";
import Select from "./Select";

const defaultValues = {
  from: "USD",
  to: "USD",
};

const ConsultDivisa = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ defaultValues });

  const { amountRegister } = useRegisterTransfer({ register });
  const { change, money, symbolFrom, symbolTo, onHandleSubmit, onHandleClick } = useDivisa(
    watch,
    reset
  );

  return (
    <div className="container-conversion">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="select">
          <Select
            label="FROM"
            listSelect={money}
            register={register("from")}
            className="selectConversion"
          />
          <Select
            label="TO"
            listSelect={money}
            register={register("to")}
            className="selectConversion"
          />
        </div>
        <SimpleInput
          label="Amount"
          type="number"
          register={amountRegister()}
          error={errors.amount?.message}
          placeholder={`${SYMBOL_MONEY[symbolFrom]} 0.00`}
          className="conversion"
        />
        {change ? (
          <div className="input-exchange">
            <label>Exchange:</label>
            <input value={`${SYMBOL_MONEY[symbolTo]} ${change}`} disabled />
          </div>
        ) : null}

        <GridButton>
          <button type="reset" onClick={() => onHandleClick()}>
            Reset
          </button>
          <button>Consult</button>
        </GridButton>
      </form>
    </div>
  );
};

export default ConsultDivisa;
