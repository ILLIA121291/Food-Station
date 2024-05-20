import './FormLogin.scss';
import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import FormHttpInformMassege from '../../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';
import { IHttpResponseState } from '../../13.2.4.2_LoginForm/LoginForm';

export interface IUserLogin {
  action: string;
  login: string;
  password: string;
  save: boolean;
}

interface IProps {
  langugeApp: typeof english;
  process: string;
  httpResponseState: IHttpResponseState;
  setDisplayFormState: React.Dispatch<React.SetStateAction<string>>;
  postUserData: (userGetData: IUserLogin) => Promise<void>;
}

const FormLogin: FC<IProps> = ({ setDisplayFormState, postUserData, langugeApp, process, httpResponseState }) => {
  return (
    <Formik
      initialValues={{
        action: 'User try login',
        login: '',
        password: '',
        save: false,
      }}

      
      validationSchema={Yup.object({
        login: Yup.string().min(2, 'Миним 2 симвла').required('Введите логин'),
        password: Yup.string().min(2, 'Миним 2 симвла').required('Введите пароль'),
      })}


      onSubmit={(values: IUserLogin) => {
        postUserData(values);
      }}
    >
      <Form className="fc">
        <Field className="finput mt30" id="login" name="login" type="text" placeholder="Email address or telephone" />
        <div className="f__info-message rc">
          <ErrorMessage name="login" component="p" />
          {httpResponseState.isResponse && !httpResponseState.loginStatus ? 'Логин не верен' : null}
        </div>

        <Field className="finput " id="password" name="password" type="text" placeholder="Password" />
        <div className="f__info-message rc">
          <ErrorMessage name="password" component="p" />
          {httpResponseState.isResponse && !httpResponseState.passwordStatus ? 'Пароль не верен' : null}
        </div>

        <button className="wt150 fbtn_text" type="button" onClick={() => setDisplayFormState('Form forgot password')}>
          Forgot password?
        </button>

        <label className="mt20" htmlFor="save">
          <Field className="mr10" id="save" name="save" type="checkbox" />
          Remember me
        </label>

        <button className="fbtn fbtn__active mt20" type="submit">
          Login
        </button>

        <FormHttpInformMassege langugeApp={langugeApp} componentName="FormLogin" process={process} httpResponseState={httpResponseState} />

        <p className="tx-al-c us-se">
          Create an account{' '}
          <button className="fbtn_text" type="button" onClick={() => setDisplayFormState('Form Signup')}>
            Signup now
          </button>
        </p>
      </Form>
    </Formik>
  );
};

export default FormLogin;
