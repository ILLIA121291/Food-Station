import './LoginForm.scss';
import { FC, useState } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import FormLogin from '../13.2.4.3_FormLogin/13.2.4.3.1_FormLogin/FormLogin';
import FormSignup from '../13.2.4.4_FormSignup/FormSignup';
import FormForgotPassword from '../13.2.4.3_FormLogin/13.2.4.3.2_FormForgotPassword/FormForgotPassword';
import FromNewPassword from '../13.2.4.3_FormLogin/13.2.4.3.3_FromNewPassword/FromNewPassword';

interface IProps {
  langugeApp: typeof english;
}

const LoginForm: FC<IProps> = () => {
  const [loginFormState, setLoginFormState] = useState<string>('Form Login');

  let displayForm;
  let btnStyleLogin: string;
  let btnStyleSignup: string;

  switch (loginFormState) {
    case 'Form forgot password':
      displayForm = <FormForgotPassword />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
      break;
    case 'Form new password':
      displayForm = <FromNewPassword />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
      break;
    case 'Form Signup':
      displayForm = <FormSignup />;
      btnStyleLogin = 'fbtn__waiting';
      btnStyleSignup = 'fbtn__active';
      break;
    default:
      displayForm = <FormLogin setLoginFormState={setLoginFormState} />;
      btnStyleLogin = 'fbtn__active';
      btnStyleSignup = 'fbtn__waiting';
  }

  return (
    <div className="fc f_ac pt30 fwt login-form__container ">
      <h4 className="ftit">Login form</h4>
      <div className="mt20 f fg15">
        <button className={`fbtn wt150 ${btnStyleLogin}`} onClick={() => setLoginFormState('Form Login')}>
          Login
        </button>
        <button className={`fbtn wt150 ${btnStyleSignup}`} onClick={() => setLoginFormState('Form Signup')}>
          Signup
        </button>
      </div>
      {displayForm}
    </div>
  );
};

export default LoginForm;
