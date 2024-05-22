import './FormSignup.scss';

import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import FormHttpInformMassege from '../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';
import { IHttpResponseState } from '../13.2.4.2_LoginForm/LoginForm';
import * as Yup from 'yup';
import RememberMeCheckbox from '../../../../14_General-Pages-Components/14.5_FormsComponents/RememberMeCheckbox';
import PasswordInput from '../../../../14_General-Pages-Components/14.5_FormsComponents/PasswordInput';
import BlockErrorMessages from '../../../../14_General-Pages-Components/14.5_FormsComponents/BlockErrorMessages';

export interface IUserSignup {
  action: string;
  name: string;
  login: string;
  password: string;
  passwordConfirmation: string;
  save: boolean;
}

interface IProps {
  langugeApp: typeof english;
  postUserData: (userGetData: IUserSignup) => Promise<void>;
  process: string;
  httpResponseState: IHttpResponseState;
}

const FormSignup: FC<IProps> = ({ postUserData, langugeApp, process, httpResponseState }) => {
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
          action: 'User create account',
          name: '',
          login: '',
          password: '',
          passwordConfirmation: '',
          save: false,
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
          <Field name="name" className="finput mt30" type="text" placeholder="Your name" />
          <BlockErrorMessages name="name" />

          <Field name="login" className="finput" type="text" placeholder="Email address or telephone" onFocus={() => setHttpInformMassege(false)} />
          <BlockErrorMessages name="login" httpMessage={httpInformMassege ? 'This login is already registered' : null} />

          <PasswordInput name="password" placeholder="Password" />
          <BlockErrorMessages name="password" />

          <PasswordInput name="passwordConfirmation" placeholder="Repeat password" />
          <BlockErrorMessages name="passwordConfirmation" />

          <RememberMeCheckbox name="save" langugeApp={langugeApp} />

          <button className="mt15 fbtn fbtn__active" type="submit" disabled={httpInformMassege}>
            Create account & login
          </button>
        </Form>
      </Formik>
      <FormHttpInformMassege componentName="FormSignup" process={process} httpResponseState={httpResponseState} langugeApp={langugeApp} />
    </>
  );
};

export default FormSignup;
