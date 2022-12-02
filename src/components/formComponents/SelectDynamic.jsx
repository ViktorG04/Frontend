import Select from "react-select";
import Notification from "../alerts/Notification";

const SelectDynamic = ({ props }) => {

  const {label, Controller, control, accounts, errors} = props;

  const list = accounts.map((item) => {
    return { value: item.idAccount, label: item.numberAccount };
  });

  return (
    <div>
      <label>{label}</label>
      <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue={null}
              {...field}
              options={list}
            />
          )}
          rules={("select",{required: {value: true, message: "Field is required"}})}
        />
      {errors.select?.message && <Notification error={errors.select.message}/> }
    </div>
  )
}
export default SelectDynamic;
