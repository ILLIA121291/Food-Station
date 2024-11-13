import './FormSignup.scss';

import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import english from '../../../../language/english';
import { IHttpResponseState } from '../0_LoginSignupForm/LoginSignupForm';
import * as Yup from 'yup';
import FormHttpInformMassege from '../../FormHttpInformMassege/FormHttpInformMassege';
import RememberMeCheckbox from '../../FormsComponents/RememberMeCheckbox';
import PasswordInput from '../../FormsComponents/PasswordInput';
import BlockErrorMessages from '../../FormsComponents/BlockErrorMessages';

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
          action: 'User create account',
          name: '',
          login: '',
          password: '',
          passwordConfirmation: '',
          save: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[aA-zZ]+$/, textValidation.onlyletters)
            .min(2, textValidation.minimumSymbols)
            .required(textValidation.enterName),

          login: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterLogin),

          password: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterPassword),

          passwordConfirmation: Yup.string()
            .required(textValidation.enterPasswordConfirmation)
            .oneOf([Yup.ref('password')], textValidation.passwordsMustMatch),
        })}
        onSubmit={(values: IUserSignup) => {
          postUserData(values);
        }}
      >
        <Form className="fc">
          <Field name="name" className="finput mt30" type="text" placeholder={text.yourName} />
          <BlockErrorMessages name="name" />

          <Field name="login" className="finput" type="text" placeholder={text.emailOrTelephone} onFocus={() => setHttpInformMassege(false)} />
          <BlockErrorMessages name="login" httpMessage={httpInformMassege ? text.loginAlreadyRegisterd : null} />

          <PasswordInput name="password" placeholder={text.password} />
          <BlockErrorMessages name="password" />

          <PasswordInput name="passwordConfirmation" placeholder={text.repeatPassword} />
          <BlockErrorMessages name="passwordConfirmation" />

          <RememberMeCheckbox name="save" langugeApp={langugeApp} />

          <button className="mt15 fbtn fbtn__active" type="submit" disabled={httpInformMassege}>
            {text.createAccount}
          </button>
        </Form>
      </Formik>
      <FormHttpInformMassege componentName="FormSignup" process={process} httpResponseState={httpResponseState} langugeApp={langugeApp} />
    </>
  );
};

export default FormSignup;
