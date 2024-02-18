import { useEffect } from 'react';
import {
  Backdrop,
  CloseBtnThumb,
  ModalCloseBtn,
  ModalIcon,
} from './UniversalModal.styled';
import { ModalBody } from 'react-bootstrap';
import icons from '../../assets/images/sprite.svg';

const UniversalModal = ({ children, setShow }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShow(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShow]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShow(false);
    }
  };
  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalBody className="modal-body">
        <CloseBtnThumb>
          <ModalCloseBtn onClick={() => setShow(false)}>
            <ModalIcon>
              <use href={`${icons}#icon-close`}></use>
            </ModalIcon>
          </ModalCloseBtn>
        </CloseBtnThumb>
        {children}
      </ModalBody>
    </Backdrop>
  );
};

export default UniversalModal;
