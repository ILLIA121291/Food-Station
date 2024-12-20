import { FC } from 'react';
import { Formik, Form } from 'formik';
import english from '../../../../language/english';
import FormHttpInformMassege from '../../../FormHttpInformMassege/FormHttpInformMassege';
import { IHttpResponseState } from '../../0_LoginSignupForm/LoginSignupForm';
import * as Yup from 'yup';
import PasswordInput from '../../../FormsComponents/PasswordInput';
import BlockErrorMessages from '../../../FormsComponents/BlockErrorMessages/BlockErrorMessages';

export interface IUserNewPassword {
  action: string;
  password: string;
  passwordConfirmation: string;
}

interface IProps {
  langugeApp: typeof english;
  postUserData: (userGetData: IUserNewPassword) => Promise<void>;
  process: string;
  httpResponseState: IHttpResponseState;
}

const FromNewPassword: FC<IProps> = ({ langugeApp, postUserData, process, httpResponseState }) => {
  const text = langugeApp.textForms.textGeneral;
  const textValidation = langugeApp.textForms.textValidation;

  return (
    <>
      <Formik
        initialValues={{
          action: 'User create new password',
          login: httpResponseState.login ?? '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={Yup.object({
          password: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterNewPassword),

          passwordConfirmation: Yup.string()
            .required(textValidation.enterNewPasswordConfirmation)
            .oneOf([Yup.ref('password')], textValidation.passwordsMustMatch),
        })}
        onSubmit={(values: IUserNewPassword) => {
          postUserData(values);
        }}
      >
        <Form className="fc">
          <h4 className="ftit mt30 tx-al-c">{text.setNewPassword}</h4>

          <PasswordInput name="password" className="mt30" placeholder={text.newPassword} />
          <BlockErrorMessages name="password" />

          <PasswordInput name="passwordConfirmation" placeholder={text.repeatPassword} />
          <BlockErrorMessages name="passwordConfirmation" />

          <button className="fbtn fbtn__active" type="submit">
            Reset
          </button>
        </Form>
      </Formik>
      <FormHttpInformMassege componentName="FormNewPassword" langugeApp={langugeApp} process={process} />
    </>
  );
};

export default FromNewPassword;
