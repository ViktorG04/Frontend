import { useState, useEffect } from "react";

const useFindAccount = ({ idAccount, objectFind }) => {
  const [accountFound, setAccountFound] = useState({});

  useEffect(() => {
    const result = objectFind.find((item) => item.idAccount === idAccount);
    setAccountFound({ ...result });
  }, [objectFind, idAccount]);

  return { accountFound };
};

export default useFindAccount;
