import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { onDisplayModalWindow } from '../../../../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';
import english from '../../../../../../language/english';

interface IProps {
  langugeApp: typeof english;
}

const NoLoginBtn: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <button
      className="login__btn"
      onClick={() => {
        dispatch(onDisplayModalWindow({ component: 'LoginForm' }));
      }}
    >
      Login
    </button>
  );
};

export default NoLoginBtn;
