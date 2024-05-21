import './FormSignup.scss';

import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import FormHttpInformMassege from '../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';
import { IHttpResponseState } from '../13.2.4.2_LoginForm/LoginForm';
import * as Yup from 'yup';

export interface IUserSignup {
  action: string;
  name: string;
  login: string;
  password: string;
  passwordConfirmation: string;
}

interface IProps {
  langugeApp: typeof english;
  postUserData: (userGetData: IUserSignup) => Promise<void>;
  process: string;
  httpResponseState: IHttpResponseState;
}

const FormSignup: FC<IProps> = ({ postUserData, langugeApp, process, httpResponseState }) => {
  return (
    <>
      <Formik
        initialValues={{
          action: 'User create account',
          name: '',
          login: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[aA-zZ]+$/, 'ТОЛЬКО БУКВЫ!!!')
            .min(2, 'Имя должно содержать минемум 2 симавола!')
            .required('Обязательное поле'),

          login: Yup.string().min(2, 'Миним 2 симвла').required('Введите логин'),

          password: Yup.string().min(2, 'Your password is too short.').required('Please enter new password.'),

          passwordConfirmation: Yup.string()
            .required('Please retype new password.')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        })}
        onSubmit={(values: IUserSignup) => {
          postUserData(values);
        }}
      >
        <Form className="fc">
          <Field className="finput mt30" name="name" type="text" placeholder="Your name" />
          <div className="wt345 f__info-message rc">
            <ErrorMessage name="name" component="p" />
          </div>

          <Field className="finput" name="login" type="text" placeholder="Email address or telephone" />
          <div className="wt345 f__info-message rc">
            {httpResponseState.isResponse && !httpResponseState.loginStatus ? 'This login is already registered' : null}
            <ErrorMessage name="login" component="p" />
          </div>

          <Field className="finput" name="password" type="text" placeholder="New password" />
          <div className="wt345 f__info-message rc">
            <ErrorMessage name="password" component="p" />
          </div>

          <Field className="finput" name="passwordConfirmation" type="text" placeholder="Repeat new password" />
          <div className="wt345 f__info-message rc">
            <ErrorMessage name="passwordConfirmation" component="p" />
          </div>

          <button className="fbtn fbtn__active" type="submit">
            Create account
          </button>
        </Form>
      </Formik>
      <FormHttpInformMassege componentName="FormSignup" process={process} httpResponseState={httpResponseState} langugeApp={langugeApp} />
    </>
  );
};

export default FormSignup;
