import LanguagePanel from '../../../14_General-Pages-Components/14.1_LanguagePanel/LanguagePanel';
import CurrencyPanel from '../../../14_General-Pages-Components/14.2_CurrencyPanel/CurrencyPanel';
import HeaderAppLogin from '../13.2.4_HeaderAppLogin/HeaderAppLogin';
import './CurrencyLanguageLogin.scss';

import { FC } from 'react';

const CurrencyLanguageLogin: FC = () => {
  return (
    <div className="cur-lang-log">
      <CurrencyPanel />
      <LanguagePanel />
      <HeaderAppLogin />
    </div>
  );
};

export default CurrencyLanguageLogin;
