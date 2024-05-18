import { FC } from 'react';
import { Formik, Form, Field } from 'formik';

const FromNewPassword: FC = () => {
  return (
    <Formik
      initialValues={{
        passwordOne: 'ввв',
        passwordTwo: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm({
          values: {
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
