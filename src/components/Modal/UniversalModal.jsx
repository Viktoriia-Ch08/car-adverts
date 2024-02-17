import { Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const UniversalModal = ({ show, handleClose, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default UniversalModal;
