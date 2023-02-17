import { methodPOST } from "../api/methodAPI";

export const getExchanges = async (transferInfo) => {
  const { token, ...data } = transferInfo;
  const response = await methodPOST({ url: `exchange`, data, token });
  return response;
};
