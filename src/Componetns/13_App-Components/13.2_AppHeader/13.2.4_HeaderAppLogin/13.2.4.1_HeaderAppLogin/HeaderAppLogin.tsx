import './HeaderAppLogin.scss';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { onDisplayModalWindow } from '../../../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';

const HeaderAppLogin: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="login__container">
      <button
        className="login__btn"
        onClick={() => {
          dispatch(onDisplayModalWindow({ component: 'LoginForm' }));
        }}
      >
        Login
      </button>
    </div>
  );
};

export default HeaderAppLogin;
