import { methodGET } from "../api/methodAPI"

export const getExternalAccounts = async (idUser, token) => {
  const response = await methodGET({ url: `accounts/transfer/${idUser}`, token })
  return response;
};

export const getInfoAccountById = async (idAccount, token) => {
  const response = await methodGET({ url: `accounts/info/${idAccount}`, token })
  return response;
};
