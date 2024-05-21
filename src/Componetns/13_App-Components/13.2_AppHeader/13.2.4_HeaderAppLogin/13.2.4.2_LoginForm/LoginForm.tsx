import './LoginForm.scss';
import { FC, useState } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import FormLogin from '../13.2.4.3_FormLogin/13.2.4.3.1_FormLogin/FormLogin';
import FormSignup from '../13.2.4.4_FormSignup/FormSignup';
import FormForgotPassword from '../13.2.4.3_FormLogin/13.2.4.3.2_FormForgotPassword/FormForgotPassword';
import FromNewPassword from '../13.2.4.3_FormLogin/13.2.4.3.3_FromNewPassword/FromNewPassword';

import useHttp from '../../../../11_Server-Components/11.1_useHttp/useHttp';

import { IUserLogin } from '../13.2.4.3_FormLogin/13.2.4.3.1_FormLogin/FormLogin';
import { IUserForotPassword } from '../13.2.4.3_FormLogin/13.2.4.3.2_FormForgotPassword/FormForgotPassword';
import { IUserNewPassword } from '../13.2.4.3_FormLogin/13.2.4.3.3_FromNewPassword/FromNewPassword';
import { IUserSignup } from '../13.2.4.4_FormSignup/FormSignup';

// import { useDispatch } from 'react-redux';
// import { noCloseModalWindow } from '../../../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';

export interface IHttpResponseState {
  isResponse: boolean;
  isLogin: boolean;
  login: string;
  loginStatus: boolean;
  passwordStatus: boolean;
}

const initStatehttpResponse = {
  isResponse: false,
  isLogin: false,
  login: '',
  loginStatus: false,
  passwordStatus: false,
};

interface IProps {
  langugeApp: typeof english;
}

const LoginForm: FC<IProps> = ({ langugeApp }) => {
  // const dispatch = useDispatch();

  const [displayFormState, setDisplayFormState] = useState<string>('Form Login');
  const [httpResponseState, setHttpResponseState] = useState<IHttpResponseState>(initStatehttpResponse);

  // Fetching ------------------------------------------------

  // const { request, process, setProcess } = useHttp();
  const { process, setProcess } = useHttp();

  const postUserData = async (userGetData: IUserLogin | IUserForotPassword | IUserNewPassword | IUserSignup) => {
    // Data before sending to server --------------------------------

    const getResponse = {
      ...userGetData,
      role: 'User',
      time: new Date().toLocaleString(),
    };

    // Sending data to server ----------------------------------------

    // const getResponse = await request('https://jsonplaceholder.typicode.com/posts', 'POST', JSON.stringify(userSendData), { 'Content-type': 'application/json' });

    // Get response from server -------------------------------------------------------------------------

    // Form Login -------------------------------------------------------------
    if (getResponse.action == 'User try login') {
      setProcess('success');

      if ((getResponse as IUserLogin).save) {
        localStorage.setItem('login', (getResponse as IUserLogin).login);
        localStorage.setItem('password', (getResponse as IUserLogin).password);
      }

      //setHttpResponseState({ isResponse: true, isLogin: false, loginStatus: true, passwordStatus: false, login: (getResponse as IUserLogin).login });

      if ((getResponse as IUserLogin).login === 'loginError') {
        setHttpResponseState({ isResponse: true, isLogin: false, loginStatus: false, passwordStatus: true, login: (getResponse as IUserSignup).login });
      } else if ((getResponse as IUserLogin).password === '1234') {
        setHttpResponseState({ isResponse: true, isLogin: false, loginStatus: true, passwordStatus: false, login: (getResponse as IUserSignup).login });
      } else {
        setHttpResponseState({ isResponse: true, isLogin: true, loginStatus: true, passwordStatus: true, login: (getResponse as IUserSignup).login });
      }

      console.log('FORM LOGIN');
      console.log(getResponse);
    }

    // Form Forgot Password -------------------------------------------------
    if (getResponse.action == 'User forgot password') {
      setProcess('success');

      let controlLogin = true;

      setHttpResponseState({
        isResponse: true,
        isLogin: controlLogin,
        loginStatus: controlLogin,
        passwordStatus: false,
        login: (getResponse as IUserForotPassword).login,
      });

      if (controlLogin) {
        setTimeout(() => {
          setDisplayFormState('Form new password');
          setProcess('waiting');
        }, 1000);
      }

      console.log('FORM FORGOT PASSWORD');
      console.log(getResponse);
    }

    // Form New Passwoerd --------------------------------------------------

    if (getResponse.action == 'User create new password') {
      setProcess('success');

      if (localStorage.getItem('password')) {
        localStorage.setItem('password', (getResponse as IUserNewPassword).password);
      }

      console.log('FORM NEW PASSWORD');
      console.log(getResponse);
    }

    // Form Signup -------------------------------------------------------

    if (getResponse.action == 'User create account') {
      if ((getResponse as IUserSignup).login === 'loginError') {
        setHttpResponseState({ isResponse: true, isLogin: false, loginStatus: false, passwordStatus: false, login: (getResponse as IUserSignup).login });
      } else {
        setHttpResponseState({ isResponse: true, isLogin: true, loginStatus: true, passwordStatus: false, login: (getResponse as IUserSignup).login });
      }

      setProcess('success');

      if ((getResponse as IUserSignup).save && (getResponse as IUserSignup).login != 'loginError') {
        localStorage.setItem('login', (getResponse as IUserSignup).login);
        localStorage.setItem('password', (getResponse as IUserSignup).password);
      }

      console.log('FORM SIGNUP');
      console.log(getResponse);
    }

    // return console.log(getResponse), setProcess('success');
  };

  // Reducer ------------------------------------------------
  let displayForm: JSX.Element;
  let btnStyleLogin: string;
  let btnStyleSignup: string;
  let formTitel: string;

  switch (displayFormState) {
    case 'Form Signup':
      formTitel = 'Signup form';
      displayForm = <FormSignup langugeApp={langugeApp} postUserData={postUserData} process={process} httpResponseState={httpResponseState} />;
      btnStyleLogin = 'fbtn__waiting';
      btnStyleSignup = 'fbtn__active';
      break;

    case 'Form new password':
      formTitel = 'Login form';
      displayForm = <FromNewPassword langugeApp={langugeApp} postUserData={postUserData} process={process} httpResponseState={httpResponseState} />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
      break;

    case 'Form forgot password':
      formTitel = 'Login form';
      displayForm = <FormForgotPassword langugeApp={langugeApp} httpResponseState={httpResponseState} postUserData={postUserData} process={process} />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
      break;

    default:
      formTitel = 'Login form';
      displayForm = <FormLogin langugeApp={langugeApp} setDisplayFormState={setDisplayFormState} postUserData={postUserData} process={process} httpResponseState={httpResponseState} />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
  }

  // Component ------------------------------------------------------------------

  return (
    <div className="fc f_ac pt30 fwt login-form__container ">
      <h4 className="ftit">{formTitel}</h4>
      <div className="mt20 f fg15">
        <button
          className={`fbtn wt150 ${btnStyleLogin}`}
          onClick={() => {
            setProcess('waiting'), setDisplayFormState('Form Login'), setHttpResponseState(initStatehttpResponse);
          }}
        >
          Login
        </button>
        <div></div>
        <button
          className={`fbtn wt150 ${btnStyleSignup}`}
          onClick={() => {
            setDisplayFormState('Form Signup'), setProcess('waiting'), setHttpResponseState(initStatehttpResponse);
          }}
        >
          Signup
        </button>
      </div>
      {displayForm}
    </div>
  );
};

export default LoginForm;
