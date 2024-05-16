const useSetInitialCurrencyApp = () => {
  let initialCurrency;

  if (!localStorage.getItem('currency')) {
    localStorage.setItem('currency', 'USD');
    initialCurrency = { currencyApp: 'USD' };
  } else {
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
  }

  return initialCurrency;
};

export default useSetInitialCurrencyApp;
