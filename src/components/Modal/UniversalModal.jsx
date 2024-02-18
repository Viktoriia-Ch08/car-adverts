import { useEffect } from 'react';
import {
  Backdrop,
  CloseBtnThumb,
  ModalCloseBtn,
  ModalIcon,
} from './UniversalModal.styled';
import icons from '../../assets/images/sprite.svg';
import { removeScrollLock } from '../../services/bodyScroll';

const UniversalModal = ({ children, setShow }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShow(false);
        removeScrollLock();
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
      removeScrollLock();
    }
  };
  return (
    <Backdrop onClick={handleBackdropClick}>
      <div className="modal-body">
        <CloseBtnThumb>
          <ModalCloseBtn
            onClick={() => {
              setShow(false);
              removeScrollLock();
            }}
          >
            <ModalIcon>
              <use href={`${icons}#icon-close`}></use>
            </ModalIcon>
          </ModalCloseBtn>
        </CloseBtnThumb>
        {children}
      </div>
    </Backdrop>
  );
};

export default UniversalModal;
