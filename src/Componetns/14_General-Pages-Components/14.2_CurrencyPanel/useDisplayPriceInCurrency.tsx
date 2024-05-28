interface ICurrencies {
  [key: string]: number;
}

const useDisplayPriceInCurrency = (currency: string, price: number, zerro?: boolean): string => {
  const currencies: ICurrencies = {
    USD: 1,
    EUR: 0.94,
    JPY: 154.64,
  };

  let priceForDisplay: string = (price * currencies[currency]).toFixed(2);

  const dot = (price * currencies[currency]).toFixed(2).indexOf('.');

  if (dot > 2) {
    const resultArr = [];

    let beforDot = priceForDisplay.slice(0, dot).split('').reverse();
    let afterDot = priceForDisplay.slice(dot).split('');
    for (let i = 0; i < beforDot.length; i++) {
      resultArr.push(beforDot[i]);

      if ((i + 1) % 3 == 0 && i != beforDot.length - 1) {
        resultArr.push(' ');
      }
    }

    resultArr.reverse();
    if (!zerro) {
      resultArr.push(...afterDot);
    }

    priceForDisplay = resultArr.join('');
  }

  return priceForDisplay + ' ' + currency;
};

export default useDisplayPriceInCurrency;
