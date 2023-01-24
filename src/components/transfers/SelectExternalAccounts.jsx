import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import SelectDynamic from "../formComponents/SelectDynamic";
import { getExternalAccounts } from "../../services/accounts";

const SelectExternalAccounts = ({
  control,
  accountDestinyRegister,
  errors,
}) => {
  const [externalAccounts, setExternalAccounts] = useState([]);

  const {
    user: { idUser },
    token,
  } = useSelector((state) => state.auth);

  const findAccounts = useCallback(async () => {
    try {
      const data = await getExternalAccounts(idUser, token);
      setExternalAccounts(data);
    } catch (error) {
      toast.error(error);
    }
  }, [idUser, token]);

  useEffect(() => {
    findAccounts();
  }, [findAccounts]);

  return (
    <SelectDynamic
      label="Account Beneficiary"
      name="accountDestiny"
      control={control}
      rules={accountDestinyRegister}
      accounts={externalAccounts}
      error={errors}
    />
  );
};

export default SelectExternalAccounts;
