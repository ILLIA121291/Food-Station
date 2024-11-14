import './FormHttpInformMassege.scss';

import { FC } from 'react';
import english from '../../../language/english';
import { IHttpResponseState } from '../../../components/forms/LoginSignupFrom/0_LoginSignupForm/LoginSignupForm';

interface IProps {
  langugeApp: typeof english;
  componentName: string;
  process: string;
  httpResponseState?: IHttpResponseState;
}

interface ITextForm {
  [ket: string]: string;
}

const FormHttpInformMassege: FC<IProps> = ({ langugeApp, componentName, process, httpResponseState }) => {
  const textGeneral = langugeApp.textForms.textFormHttpInformMassege;

  let textForm: ITextForm;
  let message: string;
  let colorText: string;

  // Components ----------------------------------------------
  switch (componentName) {
    case 'CallMeForm':
      textForm = langugeApp.textForms.textCallMeForm;
      break;
    case 'FormLogin':
      textForm = langugeApp.textForms.textFormLogin;
      break;
    case 'FormForgotPassword':
      textForm = langugeApp.textForms.textFormForgotPassword;
      break;
    case 'FormNewPassword':
      textForm = langugeApp.textForms.textFormNewPassword;
      break;
    case 'FormSignup':
      textForm = langugeApp.textForms.textFormSignup;
      break;
    default:
      textForm = langugeApp.textForms.textFormHttpInformMassege;
  }

  // Messages -------------------------------------------------
  switch (process) {
    case 'error':
      message = textGeneral.error;
      colorText = 'red';
      break;

    case 'success':
      if (httpResponseState == undefined) {
        message = textForm.success;
        colorText = 'green';
      } else if (httpResponseState.isLogin == false) {
        message = textForm.unsuccessfulLogin ?? '';
        colorText = 'red';
      } else if (httpResponseState.isLogin == true) {
        message = textForm.successLogin;
        colorText = 'green';
      }
      break;

    case 'loading':
      message = textGeneral.loading;
      colorText = 'orange';
      break;

    default:
      message = textForm.waiting ?? '';
      colorText = 'black';
      break;
  }

  return (
    <div className="mt15 f__info-message" style={{ color: colorText! }}>
      {message!}
    </div>
  );
};

export default FormHttpInformMassege;
