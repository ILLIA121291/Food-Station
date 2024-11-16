import IExchangeRate from '../interfaces/IExchangeRate'

export const DOMAIN_NAME = 'http://localhost:3000/';

export const DISH_TYPE_NAMES = ['pizza', 'roll', 'sushi', 'soup', 'snack', 'sauce', 'drink', 'dessert', 'set'];

// Обмен валют; 
export const EXCHANGE_RATE: IExchangeRate = {
  USD: 1,
  EUR: 0.94,
  JPY: 154.64,
};
