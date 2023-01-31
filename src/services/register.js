import { methodPOST } from "../api/methodAPI"

export const registered = async (profileInfo) => {
  const response = await methodPOST({ url: `register`, data: profileInfo });
  return response;
};
