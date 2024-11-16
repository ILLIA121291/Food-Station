import './HeaderAppLogin.scss';
import { FC } from 'react';
import english from '../../../language/english';
import NoLoginBtn from '../1_no_login_btn/NoLoginBtn';
import LoginBtn from '../2_login_btn/LoginBtn';

interface IProps {
  langugeApp: typeof english;
  isUserAuthorized: boolean;
}

const HeaderAppLogin: FC<IProps> = ({ langugeApp, isUserAuthorized }) => {
  return <div className="login__container">{isUserAuthorized ? <LoginBtn /> : <NoLoginBtn langugeApp={langugeApp} />}</div>;
};

export default HeaderAppLogin;
