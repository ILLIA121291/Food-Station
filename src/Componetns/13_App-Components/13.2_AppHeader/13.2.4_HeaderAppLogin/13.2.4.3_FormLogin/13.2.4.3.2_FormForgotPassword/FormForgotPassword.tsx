import './FormForgotPassword.scss';
import { FC, useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import english from '../../../../../../language/english';
import { IHttpResponseState } from '../../13.2.4.2_LoginForm/LoginForm';
import * as Yup from 'yup';
import FormHttpInformMassege from '../../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';
import BlockErrorMessages from '../../../../../14_General-Pages-Components/14.5_FormsComponents/BlockErrorMessages';

export interface IUserForotPassword {
  action: string;
  login: string;
}

interface IProps {
  langugeApp: typeof english;
  postUserData: (userGetData: IUserForotPassword) => Promise<void>;
  process: string;
  httpResponseState: IHttpResponseState;
}

const FormForgotPassword: FC<IProps> = ({ langugeApp, process, postUserData, httpResponseState }) => {
  const text = langugeApp.textForms.textGeneral;
  const textValidation = langugeApp.textForms.textValidation;

  const [httpInformMassege, setHttpInformMassege] = useState<boolean>(false);

  useEffect(() => {
    if (httpResponseState.isResponse && !httpResponseState.loginStatus) {
      setHttpInformMassege(true);
    }
  }, [httpResponseState]);

  return (
    <>
      <Formik
        initialValues={{
          action: 'User forgot password',
          login: httpResponseState.login ?? '',
        }}
        validationSchema={Yup.object({
          login: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterLogin),
        })}
        onSubmit={(values: IUserForotPassword) => {
          postUserData(values);
        }}
      >
        <Form className="fc ">
          <h4 className="ftit mt30 tx-al-c">{text.confirmYourLogin}</h4>

          <Field name="login" className="finput mt30" type="text" placeholder={text.emailOrTelephone} onFocus={() => setHttpInformMassege(false)} />
          <BlockErrorMessages name="login" httpMessage={httpInformMassege ? text.wrongLogin : null} />

          <button className="fbtn fbtn__active" type="submit" disabled={httpInformMassege}>
            {text.resetPassword}
          </button>
        </Form>
      </Formik>
      <FormHttpInformMassege componentName="FormForgotPassword" langugeApp={langugeApp} process={process} httpResponseState={httpResponseState} />
    </>
  );
};

export default FormForgotPassword;
