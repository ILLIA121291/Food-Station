import './InformMassegeCallMeForm.scss';

import { FC } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

interface IProps {
  process: string;
  langugeApp: typeof english;
}

const InformMassegeCallMeForm: FC<IProps> = ({ process, langugeApp }) => {
  const text = langugeApp.textAppHeader.textInformMassegeCallMeForm;
  let message;
  let colorText;

  switch (process) {
    case 'loading':
      message = text.loading;
      colorText = 'orange';

      break;
    case 'success':
      message = text.success;
      colorText = 'green';
      break;
    case 'error':
      message = text.error;
      colorText = 'red';
      break;
    default:
      message = text.waiting;
      colorText = 'black';
      break;
  }

  return (
    <p className="mt15 pl15 pr15 tx-al-c " style={{ color: colorText }}>
      {message}
    </p>
  );
};

export default InformMassegeCallMeForm;
