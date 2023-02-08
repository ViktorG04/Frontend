export const formatAmount = (symbol, amount) => {
  const stringAmount = amount + "";
  const splitAmount = stringAmount.split(".");
  const newAmount = splitAmount[1] ? amount : splitAmount[0] + ".00";
  return symbol + " " + newAmount;
};
