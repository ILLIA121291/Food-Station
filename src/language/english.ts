import textGeneral from './textGeneral';
import textAppHeader from './textAppHeader';
import textForms from './textForms';
import textCardProduct from './textCardProduct';
import textCurrencyPanel from './textCurrencyPanel';
import textCart from './textCart';

export interface ITextObj {
  [key: string]: string;
}

const english = {
  language: 'english',
  textGeneral,
  textAppHeader,
  textForms,
  textCardProduct,
  textCurrencyPanel,
  textCart,
};

export default english;
