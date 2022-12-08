const required = { value: true, message: "Field is required" }

export const transferDate = (register) => {
    return register("date", { required })
};

export const amountRegister = (register) => {
    return register("amount", {
        required,
        pattern: {
            value: /^\d*\.\d+$/,
            message: "Only numbers and a period are allowed"
        }
    });
};