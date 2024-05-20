import './FormForgotPassword.scss';
import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IHttpResponseState } from '../../13.2.4.2_LoginForm/LoginForm';

export interface IUserForotPassword {
  action: string;
  login: string;
}

interface IProps {
  langugeApp: typeof english;
  postUserData: (userGetData: IUserForotPassword) => Promise<void>;
  processHttp: string;
  httpResponseState:IHttpResponseState
}

const FormForgotPassword: FC<IProps> = ({ postUserData, httpResponseState }) => {
  return (
    <Formik
      initialValues={{
        action: 'User forgot password',
        login: httpResponseState.login ?? '',
      }}






      
      onSubmit={(values: IUserForotPassword, actions) => {
        postUserData(values);

        actions.resetForm({
          values: {
            action: 'User forgot password',
            login: '',
          },
        });
      }}
    >
      <Form className="fc ">
        <h4 className="ftit mt30 tx-al-c">Password reset</h4>
        <Field className="finput mt30" id="login" name="login" type="text" placeholder="Email address or telephone" />
        <div className="ferror-contaner rc">Login is incorrect</div>
        <button className="fbtn fbtn__active" type="submit">
          Reset password
        </button>
      </Form>
    </Formik>
  );
};

export default FormForgotPassword;
