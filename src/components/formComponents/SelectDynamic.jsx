import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Notification from "../alerts/Notification";
import "./css/form.css";
const SelectDynamic = ({ label, name, accounts }) => {
  const {
    control,
    formState: { errors },
  } = useForm();

  const list = accounts.map((item) => {
    return { value: item.idAccount, label: item.numberAccount };
  });

  return (
    <div className="Select">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select className="react-select" defaultValue={null} {...field} options={list} />
        )}
        rules={(name, { required: { value: true, message: "Field is required" } })}
      />
      {errors.select?.message && <Notification error={errors.select.message} />}
    </div>
  );
};
export default SelectDynamic;
