import { REQUIRED } from "../config/config";

const useRegisterAccount = ({ register }) => {
  const accountName = () => {
    return register("bankName", {
      required: REQUIRED,
      minLength: {
        value: 6,
        message: "Min length is 6!",
      },
      maxLength: {
        value: 20,
        message: "Max length is 20!",
      },
    });
  };

  const accountNumber = () => {
    return register("numberAccount", {
      required: REQUIRED,
      minLength: {
        value: 6,
        message: "Min length is 6!",
      },
      maxLength: {
        value: 12,
        message: "Max length is 12!",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Only numbers are allowed!",
      },
    });
  };

  const accountCredit = () => {
    return register("credit", {
      required: REQUIRED,
      pattern: {
        value: /^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/,
        message: "Only numbers and a period are allowed!",
      },
    });
  };

  const accountDate = () => {
    return register("dateExpiration", { required: REQUIRED });
  };

  return { accountName, accountNumber, accountCredit, accountDate };
};

export default useRegisterAccount;
