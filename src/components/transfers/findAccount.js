
export const findAccount = (accounts, selectAccount) => {

  const { idAccount, bankName, numberAccount, available } = accounts.find(
    (account) => account.idAccount === selectAccount.value
  );

  return { idAccount, bankName, numberAccount, available }
}
