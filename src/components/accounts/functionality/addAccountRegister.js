const required = { value: true, message: "Field is required" };

export const accountName = (register) => {
  return register("bankName", {
    required,
    minLength: {
      value: 6,
      message: "Min length is 6!",
    },
    maxLength: {
      value: 30,
      message: "Max length is 30!",
    },
  });
};

export const accountNumber = (register) => {
  return register("numberAccount", {
    required,
    minLength: {
      value: 8,
      message: "Min length is 8!",
    },
    maxLength: {
      value: 30,
      message: "Max length is 30",
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "Only numbers are allowed",
    },
  });
};

export const accountCredit = (register) => {
  return register("credit", {
    required,
    pattern: {
      value: /^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/,
      message: "Only numbers and a period are allowed",
    },
  });
};

export const accountDate = (register) => {
  return register("dateExpiration", { required });
};
