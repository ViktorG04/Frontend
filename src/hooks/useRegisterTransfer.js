import { REQUIRED } from "../config/config";

const useRegisterTransfer = ({ register }) => {
  const amountRegister = () => {
    return register("amount", {
      required: REQUIRED,
      pattern: {
        value: /^\d*\.\d+$/,
        message: "Error Only numbers!",
      },
    });
  };

  const dateRegister = () => {
    return register("date", { required: REQUIRED });
  };

  const accountOriginRegister = () => {
    return (
      "accountOrigin",
      {
        required: REQUIRED,
      }
    );
  };

  const accountDestinyRegister = () => {
    return (
      "accountDestiny",
      {
        required: REQUIRED,
      }
    );
  };

  const descriptionRegister = () => {
    return register("description", {
      required: REQUIRED,
      maxLength: {
        value: 100,
        message: "Max length is 100",
      },
    });
  };

  return {
    amountRegister,
    dateRegister,
    accountOriginRegister,
    accountDestinyRegister,
    descriptionRegister,
  };
};

export default useRegisterTransfer;
