import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

export interface IUserNewPassword {
  action: string;
  passwordOne: string;
  passwordTwo: string;
}

interface IProps {
  langugeApp: typeof english;
  postUserData: (userGetData: IUserNewPassword) => Promise<void>;
  processHttp: string;
}

const FromNewPassword: FC<IProps> = ({ postUserData }) => {
  return (
    <Formik
      initialValues={{
        action: 'User create new password',
        passwordOne: '',
        passwordTwo: '',
      }}
      onSubmit={(values: IUserNewPassword, actions) => {
        postUserData(values);
        actions.resetForm({
          values: {
            action: 'User create new password',
            passwordOne: '',
            passwordTwo: '',
          },
        });
      }}
    >
      <Form className="fc">
        <h4 className="ftit mt30 tx-al-c">Set a new password</h4>
        <Field className="finput mt30" id="passwordOne" name="passwordOne" type="text" placeholder="New password" />
        <Field className="finput mt30" id="passwordTwo" name="passwordTwo" type="text" placeholder="Repeat new password" />
        <div className="ferror-contaner rc">Passwords must match</div>
        <button className="fbtn fbtn__active" type="submit">
          Reset
        </button>
      </Form>
    </Formik>
  );
};

export default FromNewPassword;
