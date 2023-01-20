
export const findAccount = (accounts, selectAccount) => {

  const { bankName, numberAccount, available } = accounts.find(
    (account) => account.idAccount === selectAccount.value
  );

  return { bankName, numberAccount, available }
}
