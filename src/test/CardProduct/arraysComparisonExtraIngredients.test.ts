import arraysComparisonExtraIngredients from '../../card_product/7_btn_add_to_cart/functions/arraysComparisonExtraIngredients';
import IAddExtraIngredient from '../../interfaces/IAddExtraIngredient';

// Describe --------------------------------------------------
describe('arraysComparisonExtraIngredients - Test', () => {
  let sut: typeof arraysComparisonExtraIngredients;

  beforeEach(() => {
    sut = arraysComparisonExtraIngredients;
  });
  //--------------------------------------------------

  it('Should return true - 1', () => {
    const orderEL: IAddExtraIngredient[] = [{ name: 'a', price: 10, quantity: 1, cost: 10 }];
    const valueEl: IAddExtraIngredient[] = [{ name: 'a', price: 10, quantity: 1, cost: 10 }];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(true);
  });

  // ------------------------------------------------
  it('Should return ture - 2', () => {
    const orderEL: IAddExtraIngredient[] = [];
    const valueEl: IAddExtraIngredient[] = [];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(true);
  });

  // ------------------------------------------------
  it('Should return fasle - 1', () => {
    const orderEL: IAddExtraIngredient[] = [{ name: 'a', price: 10, quantity: 1, cost: 10 }];
    const valueEl: IAddExtraIngredient[] = [];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(false);
  });

  // ------------------------------------------------
  it('Should return fasle - 2', () => {
    const orderEL: IAddExtraIngredient[] = [{ name: 'b', price: 10, quantity: 1, cost: 10 }];
    const valueEl: IAddExtraIngredient[] = [{ name: 'a', price: 10, quantity: 1, cost: 10 }];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(false);
  });

  // ------------------------------------------------
  it('Should return fasle - 3', () => {
    const orderEL: IAddExtraIngredient[] = [{ name: 'b', price: 10, quantity: 1, cost: 10 }];
    const valueEl: IAddExtraIngredient[] = [{ name: 'a', price: 10, quantity: 1, cost: 10 }];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(false);
  });

  // ------------------------------------------------
  it('Should return fasle - 4', () => {
    const orderEL: IAddExtraIngredient[] = [{ name: 'b', price: 10, quantity: 1, cost: 10 }];
    const valueEl: IAddExtraIngredient[] = [
      { name: 'a', price: 10, quantity: 1, cost: 10 },
      { name: 'b', price: 10, quantity: 1, cost: 10 },
    ];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(false);
  });

  // ------------------------------------------------
  it('Should return fasle - 5', () => {
    const orderEL: IAddExtraIngredient[] = [
      { name: 'b', price: 10, quantity: 1, cost: 10 },
      { name: 'b', price: 10, quantity: 1, cost: 10 },
    ];
    const valueEl: IAddExtraIngredient[] = [{ name: 'a', price: 10, quantity: 1, cost: 10 }];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(false);
  });

  // ------------------------------------------------
  it('Should return fasle - 6', () => {
    const orderEL: IAddExtraIngredient[] = [
      { name: 'e', price: 10, quantity: 1, cost: 10 },
      { name: 'r', price: 10, quantity: 1, cost: 10 },
      { name: 'e', price: 10, quantity: 1, cost: 10 },
    ];
    const valueEl: IAddExtraIngredient[] = [
      { name: 'a', price: 10, quantity: 1, cost: 10 },
      { name: 'e', price: 10, quantity: 1, cost: 10 },
      { name: 'e', price: 10, quantity: 1, cost: 10 },
    ];

    const actual = sut(orderEL, valueEl);
    expect(actual).toBe(false);
  });
});
