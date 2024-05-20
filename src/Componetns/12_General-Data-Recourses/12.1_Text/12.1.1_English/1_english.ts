import textAppHeader from './2_textAppHeader';
import textForms from './3_textForms';

export interface ITextObj {
  [key: string]: string;
}

const english = {
  language: 'english',
  textAppHeader,
  textForms,
};

export default english;
