import { useState } from "react";

const useModal = (state) => {
  const [open, setOpen] = useState(state);

  const onCloseModal = () => {
    setOpen(false);
  };

  const onOpenModal = () => {
    setOpen(true);
  };

  return { open, onCloseModal, onOpenModal };
};

export default useModal;
