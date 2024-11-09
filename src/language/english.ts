import textAppHeader from './2_textAppHeader';
import textForms from './3_textForms';
import textCardProduct from './4_textCardProduct';

export interface ITextObj {
  [key: string]: string;
}

const english = {
  language: 'english',
  textAppHeader,
  textForms,
  textCardProduct,
};

export default english;
