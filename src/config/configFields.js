const required = { value: true, message: "Field is required" }

export const userRegister = (register) => {
  return register("user", {required})
};

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
  })
};

export const confirmPasswordRegister = (register) => {
  return register("confirmPassword", {
    required,
    minLength: {
      value: 8,
      message: "Min length is 8!",
    },
    maxLength: {
      value: 12,
      message: "Max length is 12!",
    },
  })
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
  })
};

export const emailRegister = (register) => {
  return register("email", {
    required,
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "email can only contain letters, numbers, periods, hyphens, underscores, and at sing",
    },
  })
};

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
  })
};

export const accountNumber = (register) => {
  return register("numberAccount", {
    required,
    minLength: {
      value: 16,
      message: "Min length is 16!"
    },
    maxLength: {
      value: 30,
      message: "Max length is 30"
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "Only numbers are allowed"
    },
  })
};

export const accountCredit = (register) => {
  return register("credit", {
    required,
    pattern: {
      value: /^\d*\.\d+$/,
      message: "Only numbers and a period are allowed"
    }
  })
}

export const accountDate = (register) => {
  return register("dateExpiration", { required })
};

export const accountSource = (register) => {
  return register("idSource", { required })
};