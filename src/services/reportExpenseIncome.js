import { methodPOST } from "../api/methodAPI"

export const reportExpenseIncome = async (reportInfo) => {
  const { token, ...data } = reportInfo;
  const response = await methodPOST({ url: `expenseIncome`, data, token });
  return response;
};
