import english from '../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
// import russian from "../../12_General-Data-Recourses/12.1_Text/12.1.2_Russian/1_russian";
// import japan from "../../12_General-Data-Recourses/12.1_Text/12.1.3_Japan/1_japan";

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
