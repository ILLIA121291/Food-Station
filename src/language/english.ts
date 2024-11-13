import textGeneral from './textGeneral';
import textAppHeader from './textAppHeader';
import textForms from './textForms';
import textCardProduct from './textCardProduct';
import textCurrencyPanel from './textCurrencyPanel';

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
};

export default english;
