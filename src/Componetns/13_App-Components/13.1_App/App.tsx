import './App.scss';
import './13.1.1_Scss/froms.scss';
import './13.1.1_Scss/flex.scss';
import './13.1.1_Scss/color.scss';
import './13.1.1_Scss/width.scss';
import './13.1.1_Scss/margin.scss';
import './13.1.1_Scss/pading.scss';
import './13.1.1_Scss/text.scss';
import './13.1.1_Scss/height.scss';
import './13.1.1_Scss/background.scss';

import { FC, useState } from 'react';

import HomePage from '../../15_Pages/15.1_Home-Page/15.1.1_HomePage/HomePage';
import HeaderApp from '../13.2_AppHeader/13.2.1_HeaderApp/HeaderApp';
import ModalWindow from '../../14_General-Pages-Components/14.3_ModalWindow/ModalWindow';

import english from '../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
// import russian from '../../12_General-Data-Recourses/12.1_Text/12.1.2_Russian/1_russian';
// import japan from '../../12_General-Data-Recourses/12.1_Text/12.1.3_Japan/1_japan';

let initialLanguge: typeof english;
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'English');
  initialLanguge = english;
} else {
  switch (localStorage.getItem('language')) {
    // case 'Russian':
    //   initialLanguge = russian;
    //   break;
    // case 'Japan':
    //   initialLanguge = japan;
    //   break;
    default:
      initialLanguge = english;
      break;
  }
}

const App: FC = () => {
  const [langugeApp, setLangugeApp] = useState<typeof english>(initialLanguge);

  return (
    <div className="app">
      <HeaderApp langugeApp={langugeApp} setLangugeApp={setLangugeApp} />
      <HomePage />
      <ModalWindow langugeApp={langugeApp} />
    </div>
  );
};

export default App;
