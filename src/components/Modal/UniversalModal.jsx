import { Modal } from 'react-bootstrap';

const UniversalModal = ({ show, handleClose, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default UniversalModal;
