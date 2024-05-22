import { FC } from 'react';
import { ErrorMessage } from 'formik';

interface IProps {
  name: string;
  className?: string;
  color?: string;
  httpMessage?: string | null;
}

const BlockErrorMessages: FC<IProps> = ({ className = '', name, httpMessage, color = 'rc' }) => {
  return (
    <div className={`f__info-message ${color} ${className}`}>
      <ErrorMessage name={name} component="p" />
      {httpMessage}
    </div>
  );
};

export default BlockErrorMessages;
