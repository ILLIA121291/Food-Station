import './FormForgotPassword.scss';
import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IHttpResponseState } from '../../13.2.4.2_LoginForm/LoginForm';
import * as Yup from 'yup';
import FormHttpInformMassege from '../../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';

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
  return (
    <Formik
      initialValues={{
        action: 'User forgot password',
        login: httpResponseState.login ?? '',
      }}
      validationSchema={Yup.object({
        login: Yup.string().min(2, 'Миним 2 симвла').required('Введите логин'),
      })}
      onSubmit={(values: IUserForotPassword) => {
        postUserData(values);
      }}
    >
      <Form className="fc ">
        <h4 className="ftit mt30 tx-al-c">Password reset</h4>
        <Field className="finput mt30" id="login" name="login" type="text" placeholder="Email address or telephone" />
        <div className="f__info-message rc">
          {httpResponseState.isResponse && !httpResponseState.loginStatus ? 'This login was not found, please check the spelling' : null}
          <ErrorMessage name="login" component="p" />
        </div>
        <button className="fbtn fbtn__active" type="submit">
          Reset password
        </button>
        <FormHttpInformMassege langugeApp={langugeApp} process={process} componentName="Form Forgot Password" httpResponseState={httpResponseState} />
      </Form>
    </Formik>
  );
};

export default FormForgotPassword;
