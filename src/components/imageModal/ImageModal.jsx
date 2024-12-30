import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import s from "./Modal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, src, alt }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button onClick={closeModal} className={s.modalBtn}>
        close
      </button>
      <div>
        <img className={s.modalImg} src={src} alt={alt} />
        <p className={s.modalText}>{alt}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
