import './App.scss';

import { FC } from 'react';

import HomePage from '../../15_Pages/15.1_Home-Page/15.1.1_HomePage/HomePage';
import HeaderApp from '../13.2_AppHeader/13.2.1_HeaderApp/HeaderApp';
import ModalWindow from '../../14_General-Pages-Components/14.3_ModalWindow/ModalWindow';

const App: FC = () => {
  return (
    <div className="app">
      <HeaderApp />
      <HomePage />
      <ModalWindow />
    </div>
  );
};

export default App;
