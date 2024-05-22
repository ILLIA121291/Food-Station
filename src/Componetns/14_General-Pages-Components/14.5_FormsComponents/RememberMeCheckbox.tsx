import { FC } from 'react';
import { Field } from 'formik';
import english from '../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

interface IProps {
  langugeApp: typeof english;
  className?: string;
  name: string;
}

const RememberMeCheckbox: FC<IProps> = ({ langugeApp, name, className = '' }) => {
  const text = langugeApp.textForms.textGeneral;

  return (
    <label className={`us-se  ${className}`} htmlFor={name}>
      <Field className="mr10" id={name} name={name} type="checkbox" />
      {text.rememberMe}
    </label>
  );
};

export default RememberMeCheckbox;
