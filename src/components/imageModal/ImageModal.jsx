import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import s from "./Modal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, src, alt, author, likes }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
      appElement={document.getElementById("root")}
    >
      <button onClick={closeModal} className={s.modalBtn}>
        Close
      </button>
      <div>
        <img className={s.modalImg} src={src} alt={alt} />
        <p className={s.modalText}>{alt}</p>
        <p className={s.modalText}>Author: {author}</p>
        <p className={s.modalText}>Likes: {likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
