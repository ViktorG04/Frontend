import React from "react";
import { useForm,} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Alert from "../alerts/Alert";
import MaxMinLength from "../alerts/MaxMinLength";
import Pattern from "../alerts/Pattern";

  const typeMoney = [
    {
      id: 1,
      type: 'dollar'
    },
    {
      id: 2,
      type: 'euro'
    },
    {
      id: 3,
      type: 'quetzal' 
    }
  ];


const AddAccount = () => {
  const { register, handleSubmit, formState: { errors },} = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  const onhandleSubmit = (data) => {
    data.idUser = id;
    console.log(data);

    toast.success("created Account");
    setTimeout(() => {
      navigate("/accounts");
    }, 10000);
  };

  const handleClick = () => {
    navigate("/accounts");
  };

  const listMoney =  typeMoney.map((money) => (
    <option value={money.id} key={money.id}>{money.type}</option>
  ))

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <h2>Add a bank account</h2>
      <form onSubmit={handleSubmit(onhandleSubmit)}>
        <div>
          <label>Name of the Bank</label>
          <input
            type="text"
            {...register("bankName", { required: true })}
            autoFocus
          />
          {errors.bankName?.type === "required" && <Alert />}
        </div>
        <div>
          <label>Kind of Money</label>
          <select {...register("idTypeMoney")}>
           {listMoney}
          </select>
        </div>
        <div>
          <label>Account number</label>
          <input
            type="text"
            {...register("numberAcc", {
              required: true,
              minLength: 16,
              maxLength: 30,
              pattern: /^[0-9]+$/,
            })}
          />
          {errors.numberAcc?.type === "required" && <Alert />}
          {errors.numberAcc?.type === "minLength" && (
            <MaxMinLength length="Min" number={16} />
          )}
          {errors.numberAcc?.type === "maxLength" && (
            <MaxMinLength length="Max" number={30} />
          )}
          {errors.numberAcc?.type === "pattern" && (
            <Pattern message="Only numbers are allowed" />
          )}
        </div>
        <div>
          <label>Expiration date</label>
          <input
            type="date"
            {...register("dateExp", { required: true })}
            autoFocus
          />
          {errors.dateExp?.type === "required" && <Alert />}
        </div>
        <div>
          <label>Account credit</label>
          <input
            type="text"
            {...register("credit", { required: true, pattern: /^\d*\.\d+$/ })}
            autoFocus
          />
          {errors.credit?.type === "required" && <Alert />}
          {errors.credit?.type === "pattern" && (
            <Pattern message="Only numbers and a period are allowed" />
          )}
        </div>
        <div>
          <button type="reset" onClick={handleClick}>
            Cancel
          </button>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
