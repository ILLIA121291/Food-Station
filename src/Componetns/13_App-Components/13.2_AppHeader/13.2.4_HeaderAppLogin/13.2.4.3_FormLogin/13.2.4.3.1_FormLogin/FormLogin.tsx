import './FormLogin.scss';
import { FC } from 'react';
import { Formik, Form, Field } from 'formik';

interface IProps {
  setLoginFormState: React.Dispatch<React.SetStateAction<string>>;
}

const FormLogin: FC<IProps> = ({ setLoginFormState }) => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        save: false,
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm({
          values: {
            login: '',
            password: '',
            save: false,
          },
        });
      }}
    >
      <Form className="fc">
        <Field className="finput mt30" id="login" name="login" type="text" placeholder="Email address or telephone" />
        <div className="ferror-contaner rc">Login is incorrect</div>

        <Field className="finput " id="password" name="password" type="text" placeholder="Password" />
        <div className="ferror-contaner rc">Password is incorrect</div>

        <button className="wt150 fbtn_text" type="button" onClick={() => setLoginFormState('Form forgot password')}>
          Forgot password?
        </button>

        <label className="mt20" htmlFor="save">
          <Field className="mr10" id="save" name="save" type="checkbox" />
          Remember me
        </label>

        <button className="fbtn fbtn__active mt20" type="submit">
          Login
        </button>

        <p className="mt30 tx-al-c us-se">
          Create an account{' '}
          <button className="fbtn_text" type="button" onClick={() => setLoginFormState('Form Signup')}>
            Signup now
          </button>
        </p>
      </Form>
    </Formik>
  );
};

export default FormLogin;
