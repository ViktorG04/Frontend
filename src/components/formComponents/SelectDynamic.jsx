import Select from "react-select";
import Notification from "../alerts/Notification";
import { Controller } from "react-hook-form";
import "./css/form.css";

const customStyles = {
  option: (provided, _) => ({
    ...provided,
  }),
  control: () => ({
    width: 180,
    height: 30,
    border: "1px solid #000",
    display: "flex",
    borderRadius: 1,
    color: "black",
    background: "#fff",
  }),
  valueContainer: (provided) => ({
    ...provided,
    textAlign: "left",
  }),
};

const SelectDynamic = ({ label, name, control, rules, accounts, error }) => {
  const list = accounts.map((account) => {
    return { value: account.idAccount, label: account.numberAccount };
  });

  return (
    <div className="container-dynamicSelect">
      <label>{label}:</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => <Select styles={customStyles} options={list} {...field} />}
      />
      {error && <Notification message={error} />}
    </div>
  );
};
export default SelectDynamic;
