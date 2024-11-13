import english from '../../../language/english';

import { ChangeEvent } from 'react';

type TUseChangeLanguage = (e: ChangeEvent<HTMLSelectElement>, setLangugeApp: React.Dispatch<React.SetStateAction<typeof english>>) => void;

const useChangeLanguage: TUseChangeLanguage = (e, setLangugeApp) => {
  switch ((e.target as HTMLSelectElement).value) {
    // case 'Russian':
    //   setLangugeApp(russian);
    //   localStorage.setItem('language', 'Russian');
    //   break;
    // case 'Japan':
    //   setLangugeApp(japan);
    //   localStorage.setItem('language', 'Japan');
    //   break;
    default:
      setLangugeApp(english);
      localStorage.setItem('language', 'English');
  }
};

export default useChangeLanguage;
