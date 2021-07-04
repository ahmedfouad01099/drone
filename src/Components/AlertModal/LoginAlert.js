import React, { useState } from "react";
import Modal from "react-modal";
import "./RegisterAlertModal.css";
import HashModal from "./HashModal";

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
  return props.message ? (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        // style={customStyles}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
        className="RegisterAlertModal"
        overlayClassName="OverlayRegisterAlertModal"
        ariaHideApp={false}
      >
        <p style={{ margin: "5px", color: "#000" }}>{props.message}</p>
      </Modal>
    </div>
  ) : null;
}

export default RegisterAlertModal;
