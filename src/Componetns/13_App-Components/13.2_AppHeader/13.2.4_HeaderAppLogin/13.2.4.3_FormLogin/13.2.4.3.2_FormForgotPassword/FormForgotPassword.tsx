import './FormForgotPassword.scss';
import { FC } from 'react';
import { Formik, Form, Field } from 'formik';

const FormForgotPassword: FC = () => {
  return (
    <Formik
      initialValues={{
        login: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm({
          values: {
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
          Reset
        </button>
      </Form>
    </Formik>
  );
};

export default FormForgotPassword;
