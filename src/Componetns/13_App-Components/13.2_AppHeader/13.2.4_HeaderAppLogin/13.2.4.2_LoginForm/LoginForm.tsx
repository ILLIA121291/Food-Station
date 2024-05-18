import './LoginForm.scss';
import { FC, useState } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import FormLogin from '../13.2.4.3_FormLogin/13.2.4.3.1_FormLogin/FormLogin';
import FormSignup from '../13.2.4.4_FormSignup/FormSignup';

interface IProps {
  langugeApp: typeof english;
}

const LoginForm: FC<IProps> = () => {
  const [loginFormState, setLoginFormState] = useState<string>('Form Login');

  let displayForm;
  let btnStyleLogin: string;
  let btnStyleSignup: string;

  if (loginFormState == 'Form Login') {
    displayForm = <FormLogin />;
    btnStyleLogin = 'fbtn__active';
    btnStyleSignup = 'fbtn__waiting';
  } else {
    displayForm = <FormSignup />;
    btnStyleLogin = 'fbtn__waiting';
    btnStyleSignup = 'fbtn__active';
  }

  return (
    <div className="fc f_ac pt30 fwt login-form__container ">
      <h4 className="ftit">Login form</h4>
      <div className="mt20 f fg15">
        <button 
        className={`fbtn wt150 ${btnStyleLogin}`}
        onClick={() =>setLoginFormState('Form Login')}
        >Login</button>
        <button 
        className={`fbtn wt150 ${btnStyleSignup}`}
        onClick={() => setLoginFormState('Form Signup')}
        >Signup</button>
      </div>
      {displayForm}
    </div>
  );
};

export default LoginForm;
