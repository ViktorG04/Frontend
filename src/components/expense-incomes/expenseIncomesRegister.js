const required = { value: true, message: "Field is required" };

export const dateRegister = (register) => {
  return register("date", { required });
};

export const descriptionRegister = (register) => {
  return register("description", {
    required,
    maxLength: {
      value: 58,
      message: "Max length is 58!",
    },
  });
};

export const amountRegister = (register) => {
  return register("amount", {
    required,
    pattern: {
      value: /^\d*\.\d+$/,
      message: "Only numbers and a period are allowed",
    },
  });
};
