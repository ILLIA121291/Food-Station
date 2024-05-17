import { ILangugePanel } from './sliceLanguagePanel';

const useSetInitialLanguageApp = (): ILangugePanel => {
  let initialLanguage: ILangugePanel;

  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'English');
    initialLanguage = { languageApp: 'English' };
  } else {
    switch (localStorage.getItem('language')) {
      case 'English':
        initialLanguage = { languageApp: 'English' };
        break;
      case 'Russian':
        initialLanguage = { languageApp: 'Russian' };
        break;
      case 'Japan':
        initialLanguage = { languageApp: 'Japan' };
        break;
    }
  }

  return initialLanguage!;
};

export default useSetInitialLanguageApp;
