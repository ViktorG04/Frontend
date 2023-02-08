import React from "react";
import "./css/modal.css";
const Modal = ({ isOpen, children }) => {
  return (
    <div className="modal-container" style={{ display: isOpen ? "grid" : "none" }}>
      <>{children}</>
    </div>
  );
};

export default Modal;
