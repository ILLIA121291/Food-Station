import LanguagePanel from '../../../14_General-Pages-Components/14.1_LanguagePanel/LanguagePanel';
import CurrencyPanel from '../../../14_General-Pages-Components/14.2_CurrencyPanel/CurrencyPanel';
import HeaderAppLogin from '../13.2.4_HeaderAppLogin/HeaderAppLogin';
import './CurrencyLanguageLogin.scss';

import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import { FC } from 'react';

interface IProps {
  langugeApp: typeof english;
  setLangugeApp: React.Dispatch<React.SetStateAction<typeof english>>;
}

const CurrencyLanguageLogin: FC<IProps> = ({ langugeApp, setLangugeApp }) => {
  return (
    <div className="cur-lang-log">
      <CurrencyPanel />
      <LanguagePanel langugeApp={langugeApp} setLangugeApp={setLangugeApp} />
      <HeaderAppLogin />
    </div>
  );
};

export default CurrencyLanguageLogin;
