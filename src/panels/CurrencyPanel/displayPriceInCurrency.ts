import { EXCHANGE_RATE } from '../../variables/variables';

// FUNCTION ---------------------------------------
const displayPriceInCurrency = (currency: string, price: number, zerro?: boolean): string => {
  let priceForDisplay: string = (price * EXCHANGE_RATE[currency]).toFixed(2);

  // Данное действие находит индекс точки;
  const dotIndex = priceForDisplay.indexOf('.');

  if (dotIndex > 2) {
    const resultArr = [];

    let beforDot = priceForDisplay.slice(0, dotIndex).split('').reverse();
    let afterDot = priceForDisplay.slice(dotIndex).split('');
    for (let i = 0; i < beforDot.length; i++) {
      resultArr.push(beforDot[i]);

      if ((i + 1) % 3 == 0 && i != beforDot.length - 1) {
        resultArr.push(' ');
      }
    }

    resultArr.reverse();

    // Данное дейстиве добовляет нули после точек было 3 стало 3.00;
    if (!zerro) {
      resultArr.push(...afterDot);
    }
    // Данное дейстиве преобразует массив в строку;
    priceForDisplay = resultArr.join('');
  }

  // RETURN FUNCTION -----------------------------------------
  return priceForDisplay + ' ' + currency;
};

export default displayPriceInCurrency;
