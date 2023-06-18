import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ErrorImg from '../../assets/icons/error.png';
import SuccessImg from '../../assets/icons/success.png';
import { NavBtn } from '../NavBtn';

type ModalProps = {
  error: boolean,
  close: () => void,
};

export const Modal = ({ close, error }: ModalProps) => {
  const title = error ? 'Ошибка' : 'Форма успешно отправлена';

  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', close);
  }, []);

  const modalContent = (
    <div className="overlay" onClick={close}>
      <div className="popup-wrapper">
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <header className="popup__header">
            {title && <h2>{title}</h2>}
            <button className="close-btn" onClick={close} aria-label="close">
              🗙
            </button>
          </header>
          <div className="popup__body">
            <img src={error ? ErrorImg : SuccessImg} className="popup__img" />
            {error ? (
              <button className="btn" onClick={() => close()}>
                Закрыть
              </button>
            ) : (
              <NavBtn path="/" isValid text="На главную"></NavBtn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  const root = document.getElementById('modal-root');

  return root ? ReactDOM.createPortal(modalContent, root) : null;
};
