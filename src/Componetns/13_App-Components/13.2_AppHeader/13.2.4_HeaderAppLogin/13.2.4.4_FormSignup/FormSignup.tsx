import './FormSignup.scss';

import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

export interface IUserSignup {
  action: string;
  name: string;
  login: string;
  passwordOne: string;
  passwordTwo: string;
}

interface IProps {
  langugeApp: typeof english;
  postUserData: (userGetData: IUserSignup) => Promise<void>;
  processHttp: string;
}

const FormSignup: FC<IProps> = ({ postUserData }) => {
  return (
    <Formik
      initialValues={{
        action: 'User create account',
        name: '',
        login: '',
        passwordOne: '',
        passwordTwo: '',
      }}
      onSubmit={(values: IUserSignup, actions) => {
        postUserData(values);
        actions.resetForm({
          values: {
            action: 'User create account',
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
