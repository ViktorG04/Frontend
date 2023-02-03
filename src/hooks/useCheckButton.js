import { useState } from "react";

const initialValues = {
  personalAccounts: true,
  anotherAccounts: false,
};

const changeValues = {
  personalAccounts: false,
  anotherAccounts: true,
};

const useCheckButton = ({ reset }) => {
  const [check, setCheck] = useState(initialValues);

  const onHandleCheckPersonal = (event) => {
    const state = event.target.checked;
    reset((formValues) => ({
      ...formValues,
      accountDestiny: false,
    }));
    state ? setCheck(initialValues) : setCheck(changeValues);
  };

  const onHandleCheckAnother = (event) => {
    const state = event.target.checked;
    reset((formValues) => ({
      ...formValues,
      accountDestiny: false,
    }));
    state ? setCheck(changeValues) : setCheck(initialValues);
  };

  return { check, onHandleCheckPersonal, onHandleCheckAnother };
};

export default useCheckButton;
