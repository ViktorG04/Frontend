const required = { value: true, message: "Field is required" };

export const passwordRegister = (register) => {
  return register("password", {
    required,
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

export const confirmPasswordRegister = (register, getValues) => {
  return register("confirmPassword", {
    validate: (value) => value === getValues("password") || "The passwords are not the same",
    required,
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

export const nameRegister = (register) => {
  return register("name", {
    required,
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

export const emailRegister = (register) => {
  return register("email", {
    required,
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message:
        "email can only contain letters, numbers, periods, hyphens, underscores, and at sing",
    },
  });
};

export const passwordValidate = (register, currentPassword) => {
  return register("currentPassword", {
    validate: (value) => value === currentPassword || "current password is different",
    required,
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
