export const informationAccount = (accountSelect, accounts) => {
  const origin = accounts.find(
    (account) => account.idAccount === accountSelect.value
  );

  return origin;
};