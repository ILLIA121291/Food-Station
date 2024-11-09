import './ModalWindow.scss';

import { FC, useEffect } from 'react';

import useModalWindowComponentsReducer from './useModalWindowComponentsReducer';
import useModalWindowBodyScroll from './useModalWindowBodyScroll';

import { useSelector, useDispatch } from 'react-redux';
import { noCloseModalWindow, onCloseModalWindowClickOverlay, onCloseModalWindowEscape, resetStateModalWindow } from './sliceModalWindow';
import { IStateStore } from '../../13_App-Components/13.1_App/stateStore';
import { IModalWindow } from './sliceModalWindow';
import english from '../../../language/english';

interface IProps {
  langugeApp: typeof english;
  setUserAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWindow: FC<IProps> = ({ langugeApp, setUserAuthorized }) => {
  const disptch = useDispatch();
  const { component, componentType, displayModal, closeOnOverlay, closeOnEscapeBtn } = useSelector<IStateStore, IModalWindow>(state => state.modalWindow);

  let displayComponentInModalWindow = useModalWindowComponentsReducer(langugeApp, setUserAuthorized, component, componentType);

  useEffect(() => {
    if (!displayModal && component != '') {
      setTimeout(() => {
        disptch(resetStateModalWindow());
      }, 300);
    }

    useModalWindowBodyScroll(displayModal);
  }, [displayModal]);

  const escCloseModalWindow = (e: globalThis.KeyboardEvent): void => {
    disptch(onCloseModalWindowEscape({ code: e.code, displayModal, closeOnEscapeBtn }));
  };

  useEffect(() => {
    window.addEventListener('keydown', escCloseModalWindow);

    return () => {
      window.removeEventListener('keydown', escCloseModalWindow);
    };
  }, [displayModal]);

  return (
    <div
      className={`modal-window__overlay ${displayModal ? '' : ' modal-window__hidden'}`}
      onClick={e =>
        disptch(
          onCloseModalWindowClickOverlay({
            className: (e.target as HTMLDivElement).className,
            closeOnOverlay,
          }),
        )
      }
    >
      <div className="modal-window">
        <button onClick={() => disptch(noCloseModalWindow())} className="modal-window__close-btn">
          X
        </button>
        {displayComponentInModalWindow}
      </div>
    </div>
  );
};

export default ModalWindow;
