import './PhoneCallMe.scss';

import { FC } from 'react';

import { useDispatch } from 'react-redux';
import { onDisplayModalWindow } from '../../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';

const PhoneCallMe: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="phone-call__container fc">
      <p className="phone-call__phone"> +1 (213) 452-150 </p>
      <button
        className="phone-call__callme"
        onClick={() => {
          dispatch(onDisplayModalWindow({ component: 'CallMeForm' }));
        }}
      >
        Call me back
      </button>
    </div>
  );
};

export default PhoneCallMe;
