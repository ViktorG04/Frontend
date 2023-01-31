import { REQUIRED } from "../config/config"

const useRegisterUser = ({ register }) => {

  const passwordRegister = () => {
    return register("password", {
      required: REQUIRED,
      minLength: {
        value: 8,
        message: "Min Length is 8!",
      },
      maxLength: {
        value: 12,
        message: "Max length is 12!",
      },
    });
  };


  const confirmPasswordRegister = (getValues) => {
    return register("confirmPassword", {
      validate: (value) => value === getValues("password") || "The passwords are not the same",
      required: REQUIRED,
      minLength: {
        value: 8,
        message: "Min length is 8!",
      },
      maxLength: {
        value: 12,
        message: "Max length is 12!",
      },
    });
  };


  const nameRegister = () => {
    return register("name", {
      required: REQUIRED,
      minLength: {
        value: 10,
        message: "Min length is 10!",
      },
      maxLength: {
        value: 30,
        message: "Max length is 30!",
      },
    });
  };


  const emailRegister = () => {
    return register("email", {
      required: REQUIRED,
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message:
          "email can only contain letters, numbers, periods, hyphens, underscores, and at sing",
      },
    });
  };


  const passwordValidate = (currentPassword) => {
    return register("currentPassword", {
      validate: (value) => value === currentPassword || "current password is different",
      required: REQUIRED,
      minLength: {
        value: 8,
        message: "Min Length is 8!",
      },
      maxLength: {
        value: 12,
        message: "Max length is 12!",
      },
    });
  };

  return { passwordRegister, confirmPasswordRegister, nameRegister, emailRegister, passwordValidate };

}

export default useRegisterUser
