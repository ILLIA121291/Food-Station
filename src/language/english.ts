import textGeneral from './1_textGeneral';
import textAppHeader from './2_textAppHeader';
import textForms from './3_textForms';
import textCardProduct from './4_textCardProduct';

export interface ITextObj {
  [key: string]: string;
}

const english = {
  language: 'english',
  textGeneral,
  textAppHeader,
  textForms,
  textCardProduct,
};

export default english;
