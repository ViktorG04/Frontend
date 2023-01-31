import { REQUIRED } from "../config/config"

const useRegisterExpenseIncome = ({ register }) => {

  const dateRegister = () => {
    return register("date", { required: REQUIRED });
  };

  const descriptionRegister = () => {
    return register("description", {
      required: REQUIRED,
      maxLength: {
        value: 58,
        message: "Max length is 58!",
      },
    });
  };

  const amountRegister = () => {
    return register("amount", {
      required: REQUIRED,
      pattern: {
        value: /^\d*\.\d+$/,
        message: "Only numbers and a period are allowed!",
      },
    });
  };
  return { dateRegister, descriptionRegister, amountRegister };
}

export default useRegisterExpenseIncome
