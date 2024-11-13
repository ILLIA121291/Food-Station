import './HeaderAppLogin.scss';
import { FC } from 'react';
import english from '../../../../../../language/english';
import NoLoginBtn from '../13.2.4.1.2_NoLoginBtn/NoLoginBtn';
import LoginBtn from '../13.2.4.1.3_LoginBtn/LoginBtn';

interface IProps {
  langugeApp: typeof english;
  isUserAuthorized: boolean;
}

const HeaderAppLogin: FC<IProps> = ({ langugeApp, isUserAuthorized }) => {
  return <div className="login__container">{isUserAuthorized ? <LoginBtn /> : <NoLoginBtn langugeApp={langugeApp} />}</div>;
};

export default HeaderAppLogin;
