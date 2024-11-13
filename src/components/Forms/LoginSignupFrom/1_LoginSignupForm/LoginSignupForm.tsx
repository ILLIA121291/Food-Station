import './LoginSignupForm.scss';
import { FC, useState } from 'react';
import english from '../../../../language/english';

import FormLogin from '../2_FormLogin/2.1_FormLogin/FormLogin';
import FormSignup from '../3_FormSignup/FormSignup';
import FormForgotPassword from '../2_FormLogin/2.2_FormForgotPassword/FormForgotPassword';
import FromNewPassword from '../2_FormLogin/2.3_FromNewPassword/FromNewPassword';

import useHttp from '../../../../hooks/http.hook';

import { IUserLogin } from '../2_FormLogin/2.1_FormLogin/FormLogin';
import { IUserForotPassword } from '../2_FormLogin/2.2_FormForgotPassword/FormForgotPassword';
import { IUserNewPassword } from '../2_FormLogin/2.3_FromNewPassword/FromNewPassword';
import { IUserSignup } from '../3_FormSignup/FormSignup';

// import { useDispatch } from 'react-redux';
// import { noCloseModalWindow } from '../../../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';

export interface IHttpResponseState {
  isResponse: boolean;
  isLogin: boolean;
  login: string;
  password?: string;
  loginStatus: boolean;
  passwordStatus: boolean;
}

const initStatehttpResponse: IHttpResponseState = {
  isResponse: false,
  isLogin: false,
  login: '',
  password: '',
  loginStatus: false,
  passwordStatus: false,
};

interface IProps {
  langugeApp: typeof english;
  setUserAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginSignupForm: FC<IProps> = ({ langugeApp, setUserAuthorized }) => {
  // const dispatch = useDispatch();
  const text = langugeApp.textForms.textGeneral;
  const [displayFormState, setDisplayFormState] = useState<string>('Form login');
  const [httpResponseState, setHttpResponseState] = useState<IHttpResponseState>(initStatehttpResponse);

  // Fetching ------------------------------------------------

  // const { request, process, setProcess } = useHttp();
  const { stateHttpProcess, setStateHttpProcess } = useHttp();

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
      setStateHttpProcess('success');

      if ((getResponse as IUserLogin).save && (getResponse as IUserLogin).login != 'loginError' && (getResponse as IUserLogin).password != '1234') {
        localStorage.setItem('login', (getResponse as IUserLogin).login);
        localStorage.setItem('password', (getResponse as IUserLogin).password);
      }

      if (!(getResponse as IUserLogin).save && (getResponse as IUserLogin).login != 'loginError' && (getResponse as IUserLogin).password != '1234') {
        sessionStorage.setItem('login', (getResponse as IUserLogin).login);
        sessionStorage.setItem('password', (getResponse as IUserLogin).password);
      }

      if ((getResponse as IUserLogin).login === 'loginError') {
        setHttpResponseState({ isResponse: true, isLogin: false, loginStatus: false, passwordStatus: true, login: (getResponse as IUserSignup).login });
      } else if ((getResponse as IUserLogin).password === '1234') {
        setHttpResponseState({ isResponse: true, isLogin: false, loginStatus: true, passwordStatus: false, login: (getResponse as IUserSignup).login });
      } else {
        setHttpResponseState({ isResponse: true, isLogin: true, loginStatus: true, passwordStatus: true, login: (getResponse as IUserSignup).login });
        setUserAuthorized(true);
      }

      console.log('FORM LOGIN');
      console.log(getResponse);
    }

    // Form Forgot Password -------------------------------------------------
    if (getResponse.action == 'User forgot password') {
      setStateHttpProcess('success');
      let loginTrueFalse: boolean;

      if ((getResponse as IUserForotPassword).login === 'loginError') {
        loginTrueFalse = false;

        setHttpResponseState({
          isResponse: true,
          isLogin: false,
          loginStatus: false,
          passwordStatus: false,
          login: (getResponse as IUserForotPassword).login,
        });
      } else {
        loginTrueFalse = true;
        setHttpResponseState({
          isResponse: true,
          isLogin: true,
          loginStatus: true,
          passwordStatus: false,
          login: (getResponse as IUserForotPassword).login,
        });
      }

      if (loginTrueFalse) {
        setTimeout(() => {
          setDisplayFormState('Form new password');
          setStateHttpProcess('waiting');
        }, 1000);
      }

      console.log('FORM FORGOT PASSWORD');
      console.log(getResponse);
    }

    // Form New Passwoerd --------------------------------------------------

    if (getResponse.action == 'User create new password') {
      setStateHttpProcess('success');

      if (localStorage.getItem('password')) {
        localStorage.setItem('password', (getResponse as IUserNewPassword).password);
      }

      console.log('FORM NEW PASSWORD');
      console.log(getResponse);
    }

    // Form Signup -------------------------------------------------------

    if (getResponse.action == 'User create account') {
      setStateHttpProcess('success');

      if ((getResponse as IUserSignup).login === 'loginError') {
        setHttpResponseState({ isResponse: true, isLogin: false, loginStatus: false, passwordStatus: false, login: (getResponse as IUserSignup).login });
      } else {
        setHttpResponseState({ isResponse: true, isLogin: true, loginStatus: true, passwordStatus: false, login: (getResponse as IUserSignup).login });
        setUserAuthorized(true);
      }

      if ((getResponse as IUserSignup).save && (getResponse as IUserSignup).login != 'loginError') {
        localStorage.setItem('login', (getResponse as IUserSignup).login);
        localStorage.setItem('password', (getResponse as IUserSignup).password);
      }

      if (!(getResponse as IUserSignup).save && (getResponse as IUserSignup).login != 'loginError') {
        sessionStorage.setItem('login', (getResponse as IUserSignup).login);
        sessionStorage.setItem('password', (getResponse as IUserSignup).password);
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
      formTitel = text.signupForm;
      displayForm = <FormSignup langugeApp={langugeApp} postUserData={postUserData} process={stateHttpProcess} httpResponseState={httpResponseState} />;
      btnStyleLogin = 'fbtn__waiting';
      btnStyleSignup = 'fbtn__active';
      break;

    case 'Form new password':
      formTitel = text.loginForm;
      displayForm = <FromNewPassword langugeApp={langugeApp} postUserData={postUserData} process={stateHttpProcess} httpResponseState={httpResponseState} />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
      break;

    case 'Form forgot password':
      formTitel = text.loginForm;
      displayForm = <FormForgotPassword langugeApp={langugeApp} httpResponseState={httpResponseState} postUserData={postUserData} process={stateHttpProcess} />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
      break;

    default:
      formTitel = text.loginForm;
      displayForm = <FormLogin langugeApp={langugeApp} setDisplayFormState={setDisplayFormState} postUserData={postUserData} process={stateHttpProcess} httpResponseState={httpResponseState} />;
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
            setStateHttpProcess('waiting'), setDisplayFormState('Form Login'), setHttpResponseState(initStatehttpResponse);
          }}
        >
          {text.login}
        </button>
        <button
          className={`fbtn wt150 ${btnStyleSignup}`}
          onClick={() => {
            setDisplayFormState('Form Signup'), setStateHttpProcess('waiting'), setHttpResponseState(initStatehttpResponse);
          }}
        >
          {text.signup}
        </button>
      </div>
      {displayForm}
    </div>
  );
};

export default LoginSignupForm;
