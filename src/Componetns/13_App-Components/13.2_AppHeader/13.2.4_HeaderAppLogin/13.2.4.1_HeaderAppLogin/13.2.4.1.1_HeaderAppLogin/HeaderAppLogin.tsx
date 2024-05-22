import './HeaderAppLogin.scss';
import { FC, useState, useEffect } from 'react';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import NoLoginBtn from '../13.2.4.1.2_NoLoginBtn/NoLoginBtn';
import LoginBtn from '../13.2.4.1.3_LoginBtn/LoginBtn';

interface IProps {
  langugeApp: typeof english;
}

let initialIsLoginUser: boolean;

if (localStorage.getItem('login')) {
  initialIsLoginUser = true;
} else {
  initialIsLoginUser = false;
}

const HeaderAppLogin: FC<IProps> = ({ langugeApp }) => {
  const [isLoginUser, setIsLoginUser] = useState<boolean>(initialIsLoginUser);

  //return <div className="login__container">{isLoginUser ? <LoginBtn /> : <NoLoginBtn langugeApp={langugeApp} />}</div>;
  return (
    <div className="login__container">
      {' '}
      <NoLoginBtn langugeApp={langugeApp} />
    </div>
  );
};

export default HeaderAppLogin;
