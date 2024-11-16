import LanguagePanel from '../../panels/LanguagePanel/LanguagePanel';
import CurrencyPanel from '../../panels/CurrencyPanel/CurrencyPanel';
import HeaderAppLogin from '../3_header_app_login/0_HeaderAppLogin/HeaderAppLogin';
import './CurrencyLanguageLogin.scss';

import english from '../../language/english';

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
