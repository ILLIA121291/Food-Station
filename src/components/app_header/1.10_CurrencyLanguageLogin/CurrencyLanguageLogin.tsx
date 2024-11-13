import LanguagePanel from '../../panels/LanguagePanel/LanguagePanel';
import CurrencyPanel from '../../panels/CurrencyPanel/CurrencyPanel';
import HeaderAppLogin from '../1.4_HeaderAppLogin/1.4.1_HeaderAppLogin/13.2.4.1.1_HeaderAppLogin/HeaderAppLogin';
import './CurrencyLanguageLogin.scss';

import english from '../../../language/english';

import { FC } from 'react';

interface IProps {
  langugeApp: typeof english;
  setLangugeApp: React.Dispatch<React.SetStateAction<typeof english>>;
  isUserAuthorized: boolean;
}

const CurrencyLanguageLogin: FC<IProps> = ({ langugeApp, setLangugeApp, isUserAuthorized }) => {
  return (
    <div className="cur-lang-log">
      <CurrencyPanel langugeApp={langugeApp} />
      <LanguagePanel langugeApp={langugeApp} setLangugeApp={setLangugeApp} />
      <HeaderAppLogin langugeApp={langugeApp} isUserAuthorized={isUserAuthorized} />
    </div>
  );
};

export default CurrencyLanguageLogin;
