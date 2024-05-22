import './FormLogin.scss';
import { FC, useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import FormHttpInformMassege from '../../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';
import { IHttpResponseState } from '../../13.2.4.2_LoginForm/LoginForm';
import RememberMeCheckbox from '../../../../../14_General-Pages-Components/14.5_FormsComponents/RememberMeCheckbox';
import PasswordInput from '../../../../../14_General-Pages-Components/14.5_FormsComponents/PasswordInput';
import BlockErrorMessages from '../../../../../14_General-Pages-Components/14.5_FormsComponents/BlockErrorMessages';

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
  const [httpInformMassege, setHttpInformMassege] = useState({ loginInfoMessege: false, passwordInfoMessege: false });

  useEffect(() => {
    if (httpResponseState.isResponse) {
      if (!httpResponseState.loginStatus) {
        setHttpInformMassege({ ...httpInformMassege, loginInfoMessege: true });
      } else if (!httpResponseState.passwordStatus) {
        setHttpInformMassege({ ...httpInformMassege, passwordInfoMessege: true });
      }
    }
  }, [httpResponseState]);

  return (
    <Formik
      initialValues={{
        action: 'User try login',
        login: httpResponseState.login ?? '',
        password: httpResponseState.password ?? '',
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
        <Field name="login" className="finput mt30" type="text" placeholder="Email address or telephone" onFocus={() => setHttpInformMassege({ ...httpInformMassege, loginInfoMessege: false })} />
        <BlockErrorMessages name="login" httpMessage={httpInformMassege.loginInfoMessege ? 'Логин не верен' : null} />

        <PasswordInput name="password" placeholder="Password" onFocus={() => setHttpInformMassege({ ...httpInformMassege, passwordInfoMessege: false })} />
        <BlockErrorMessages name="password" httpMessage={httpInformMassege.passwordInfoMessege ? 'Пароль не верен' : null} />

        <button className="wt150 fbtn_text" type="button" onClick={() => setDisplayFormState('Form forgot password')}>
          Forgot password?
        </button>

        <RememberMeCheckbox className="mt20" name="save" langugeApp={langugeApp} />

        <button className="fbtn fbtn__active mt20" type="submit" disabled={httpInformMassege.loginInfoMessege || httpInformMassege.passwordInfoMessege}>
          Login
        </button>

        <FormHttpInformMassege componentName="FormLogin" langugeApp={langugeApp} process={process} httpResponseState={httpResponseState} />

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
