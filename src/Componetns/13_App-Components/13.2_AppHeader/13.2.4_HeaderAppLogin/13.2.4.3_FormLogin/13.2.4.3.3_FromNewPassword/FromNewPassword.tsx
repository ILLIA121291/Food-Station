import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import FormHttpInformMassege from '../../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';
import { IHttpResponseState } from '../../13.2.4.2_LoginForm/LoginForm';
import * as Yup from 'yup';

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
          password: Yup.string().min(2, 'Your password is too short.').required('Please enter new password.'),

          passwordConfirmation: Yup.string()
            .required('Please retype new password.')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        })}
        onSubmit={(values: IUserNewPassword) => {
          postUserData(values);
        }}
      >
        <Form className="fc">
          <h4 className="ftit mt30 tx-al-c">Set a new password</h4>
          <Field className="finput mt30" id="password" name="password" type="text" placeholder="New password" />
          <div className="f__info-message rc">
            <ErrorMessage name="password" component="p" />
          </div>
          <Field className="finput" id="passwordConfirmation" name="passwordConfirmation" type="text" placeholder="Confirmation password" />
          <div className="f__info-message rc">
            <ErrorMessage name="passwordConfirmation" component="p" />
          </div>
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
