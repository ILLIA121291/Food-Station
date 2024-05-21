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
    <>
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
          <h4 className="ftit mt30 tx-al-c">Confirm your login</h4>
          <Field className="finput mt30" id="login" name="login" type="text" placeholder="Email address or telephone" />
          <div className="rc pl15 pr15 wt345 f__info-message ">
            {httpResponseState.isResponse && !httpResponseState.loginStatus ? 'This login was not found, please check the spelling' : null}
            <ErrorMessage name="login" component="p" />
          </div>
          <button className="fbtn fbtn__active" type="submit">
            Reset password
          </button>
        </Form>
      </Formik>
      <FormHttpInformMassege componentName="FormForgotPassword" langugeApp={langugeApp} process={process} httpResponseState={httpResponseState} />
    </>
  );
};

export default FormForgotPassword;
