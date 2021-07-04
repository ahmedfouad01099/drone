import React, { useState } from "react";
import Modal from "react-modal";
import "./RegisterAlertModal.css";
import { HashLoader } from "react-spinners";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function RegisterAlertModal(props) {
  const [HashModal, setHashModal] = useState(true);

  setTimeout(() => {
    setHashModal(false);
  }, 2000);
  return (
    <div>
      <Modal
        isOpen={HashModal}
        // style={customStyles}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
        className="HashModal"
        overlayClassName="OverlayRegisterAlertModal"
        ariaHideApp={false}
      >
        <HashLoader />
      </Modal>
    </div>
  );
}

export default RegisterAlertModal;
