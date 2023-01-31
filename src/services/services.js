import { methodGET, methodPOST } from "../api/methodAPI";

export const getCategories = async (token) => {
  const response = await methodGET({ url: `categories`, token });
  return response;
};

export const getTypeTransfer = async (token) => {
  const response = await methodGET({ url: `transfers`, token })
  return response;

};

export const transfers = async (infoTransfer) => {
  const { token, data } = infoTransfer;
  const response = await methodPOST({ url: `transfers`, data, token });
  return response;
}