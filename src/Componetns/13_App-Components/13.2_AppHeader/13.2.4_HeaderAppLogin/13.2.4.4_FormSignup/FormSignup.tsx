import './FormSignup.scss';

import { FC } from 'react';
import { Formik, Form, Field } from 'formik';

const FormSignup: FC = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        login: '',
        passwordOne: '',
        passwordTwo: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm({
          values: {
            name: '',
            login: '',
            passwordOne: '',
            passwordTwo: '',
          },
        });
      }}
    >
      <Form className="fc">
        <Field className="finput mt30" id="name" name="name" type="text" placeholder="Your name" />
        <div className="ferror-contaner rc">Только буквы </div>
        <Field className="finput" id="login" name="login" type="text" placeholder="Email address or telephone" />
        <div className="ferror-contaner rc">Данный логин уже зареган</div>
        <Field className="finput" id="passwordOne" name="passwordOne" type="text" placeholder="New password" />
        <Field className="finput mt30" id="passwordTwo" name="passwordTwo" type="text" placeholder="Repeat new password" />
        <div className="ferror-contaner rc">Passwords must match</div>
        <button className="fbtn fbtn__active" type="submit">
          Create account
        </button>
      </Form>
    </Formik>
  );
};

export default FormSignup;
