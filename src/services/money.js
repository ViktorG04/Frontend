import { methodGET } from "../api/methodAPI"

export const getTyMoney = async (token) => {
  const response = await methodGET({ url: `money`, token });
  return response;
};

export const getCurrency = async (token) => {
  const response = await methodGET({ url: `currency`, token });
  return response;
};
