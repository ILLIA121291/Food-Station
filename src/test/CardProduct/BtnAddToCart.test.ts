import { text } from "../../components/cards/CardProduct/7_btn_add_to_cart/functions/funTest"


describe('BtnAddToCart - Tests Group', () => {

  it('Show retweeeee', () => {
    const actual = text('abc')
    expect(actual).toBe('ABC')
  })



})