import setInitialCurrencyAppLocalStorage from '../../localStorage/functions/setInitialCurrencyAppLocalStorage';
import { ICurrencyPanel } from './sliceCurrencyPanel';

const setInitialCurrencyApp = (): ICurrencyPanel => {
  setInitialCurrencyAppLocalStorage();

  let initialCurrency: ICurrencyPanel;

  switch (localStorage.getItem('currency')) {
    case 'USD':
      initialCurrency = { currencyApp: 'USD' };
      break;

    case 'EUR':
      initialCurrency = { currencyApp: 'EUR' };
      break;

    case 'JPY':
      initialCurrency = { currencyApp: 'JPY' };
      break;
  }

  return initialCurrency!;
};

export default setInitialCurrencyApp;
