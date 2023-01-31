import { useState } from 'react'

const initialValues = {
  personalAccounts: true, anotherAccounts: false
};

const changeValues = {
  personalAccounts: false, anotherAccounts: true
};

const useCheckButton = () => {

  const [check, setCheck] = useState(initialValues)

  const onHandleCheckPersonal = (event) => {
    const state = event.target.checked;
    !state ? setCheck(changeValues) : setCheck(initialValues)
  };

  const onHandleCheckAnother = (event) => {
    const state = event.target.checked;
    !state ? setCheck(initialValues) : setCheck(changeValues)
  };

  return { check, onHandleCheckPersonal, onHandleCheckAnother }
}

export default useCheckButton
